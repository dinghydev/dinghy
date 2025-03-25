import rootPackage from '../package.json' with { type: 'json' }
import { readdirSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { exec, execSync } from 'node:child_process'
import { commitVersion } from './releaseVersion.ts'

export const packageVersion = commitVersion()

export const packageBaseVersion = packageVersion
  .split('.')
  .slice(0, 2)
  .join('.')

function allFiles(dir: string) {
  const paths = readdirSync(dir, { withFileTypes: true, recursive: true })
  return paths
    .filter((p) => p.isFile())
    .map((p) => `${p.parentPath}/${p.name}`)
    .sort((a, b) => a.localeCompare(b))
}

export function hashDockerfiles(name: string, initValue: string) {
  const hashs = [initValue]
  console.log('allfile', allFiles(join('docker', name)))
  for (const file of allFiles(join('docker', name))) {
    hashs.push(execSync(`md5sum ${file}`).toString().split(' ')[0])
  }

  return execSync(`echo ${hashs.join('-')} | md5sum -t `)
    .toString()
    .split(' ')[0]
}

async function pushImage(tag: string) {
  if (process.env.DOCKER_PUSH) {
    if (tag.endsWith('-dirty')) {
      throw new Error(`Cannot push dirty image: ${tag}`)
    }
    console.log(`Pushing: docker push ${tag}`)
    await streamExec(`docker push ${tag}`)
  } else {
    console.log(`Skipping: docker push ${tag}`)
  }
}

async function streamExec(command: string) {
  console.log(`Executing: ${command}`)
  const child = exec(command)
  child.stdout?.on('data', (data) => {
    console.log(data)
  })
  child.stderr?.on('data', (data) => {
    console.error(data)
  })
  return new Promise((resolve, reject) => {
    child.on('close', (code) => {
      if (code === 0) {
        resolve(code)
      } else {
        reject(new Error(`Command ${command} exited with code ${code}`))
      }
    })
  })
}

export async function publishImage(tags: string[], buildCommand: string) {
  const firstTag = tags[0]
  const lastTag = tags[tags.length - 1]
  const otherTags = tags.slice(1, tags.length - 1)

  console.log(`Building: ${buildCommand}`)
  await streamExec(buildCommand)

  for (const tag of otherTags) {
    await streamExec(`docker tag ${firstTag} ${tag}`)
    await pushImage(tag)
  }

  await streamExec(`docker tag ${firstTag} ${lastTag}`)
  await pushImage(lastTag)

  await pushImage(firstTag)
}

const hashedImageTag = (repo: string, name: string, initValue?: string) =>
  `${repo}:${name}-${packageBaseVersion}-${hashDockerfiles(name, initValue)}`

export async function publishHashedImage(
  repo: string,
  name: string,
  initValue: string,
) {
  const lastTag = `${repo}:${name}`
  const baseVersionTag = `${lastTag}-${packageBaseVersion}`
  const firstTag = hashedImageTag(repo, name, initValue)
  try {
    await streamExec(`docker pull --platform linux/amd64 ${firstTag}`)
    console.log(`Tag ${firstTag} exist, skip publish`, new Date().toISOString())
  } catch (e) {
    console.log(
      `Tag ${firstTag} does not exist, building...`,
      new Date().toISOString(),
    )
    await publishImage(
      [firstTag, baseVersionTag, lastTag],
      `docker buildx build${name === 'base' ? ' ' : ` --build-arg BASE_IMAGE=${initValue}`} --platform linux/amd64 -f docker/${name}/Dockerfile -t ${firstTag} .`,
    )
  }
  return firstTag
}

export async function publishRelease(repo: string, baseImage: string) {
  const lastTag = `${repo}:latest`
  const baseVersionTag = `${repo}:${packageBaseVersion}`
  const firstTag = `${repo}:${packageVersion}`
  console.log(`Building ${firstTag} ...`, new Date().toISOString())

  await publishImage(
    [firstTag, baseVersionTag, lastTag],
    [
      'docker buildx build',
      `--secret "id=npm,src=${process.env.HOME}/.npmrc"`,
      `--build-arg BASE_IMAGE=${baseImage}`,
      '--platform linux/amd64',
      '-f docker/release/Dockerfile',
      `-t ${firstTag}`,
      '.',
    ].join(' '),
  )
}

export async function publish(repo: string) {
  const baseTag = await publishHashedImage(repo, 'base', packageBaseVersion)
  const dependenciesTag = await publishHashedImage(
    repo,
    'dependencies',
    baseTag,
  )

  await publishRelease(repo, dependenciesTag)
  return `Completed docker publish ${new Date().toISOString()}`
}
