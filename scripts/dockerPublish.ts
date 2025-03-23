import { execSync } from 'child_process'
import rootPackage from '../package.json' with { type: 'json' }
import { readdirSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

export const packageVersion = rootPackage.version

export const packageBaseVersion = packageVersion
  .split('.')
  .slice(0, 2)
  .join('.')

export function hashDockerfiles(name: string) {
  const hashs = [
    packageBaseVersion,
    execSync(`md5sum docker/${name}/Dockerfile`).toString().split(' ')[0],
    execSync(`md5sum docker/${name}/Dockerfile.dockerignore`)
      .toString()
      .split(' ')[0],
  ]
  return execSync(`echo ${hashs.join('-')} | md5sum -t `)
    .toString()
    .split(' ')[0]
}

export function publishImage(
  name: string,
  tags: string[],
  buildCommand: string,
) {
  const firstTag = tags[0]
  const lastTag = tags[tags.length - 1]
  const otherTags = tags.slice(1, tags.length - 1)

  console.log(`Building: ${buildCommand}`)
  execSync(buildCommand)

  for (const tag of otherTags) {
    execSync(`docker tag ${firstTag} ${tag}`)
    console.log(`Pushing: docker push ${tag}`)
    execSync(`docker push ${tag}`)
  }
  execSync(`docker tag ${firstTag} ${lastTag}`)
  console.log(`Pushing: docker push ${lastTag}`)
  execSync(`docker push ${lastTag}`)

  console.log(`Pushing: docker push ${firstTag}`)
  execSync(`docker push ${firstTag}`)
}

const baseImageTag = (repo: string) =>
  `${repo}:base-${packageBaseVersion}-${hashDockerfiles('base')}`

export function publishBase(repo: string) {
  const lastTag = `${repo}:base`
  const baseVersionTag = `${lastTag}-${packageBaseVersion}`
  const firstTag = baseImageTag(repo)
  try {
    execSync(`docker pull ${firstTag}`)
    console.log(`Tag ${firstTag} exist, skip publish`)
  } catch (e) {
    console.log(`Tag ${firstTag} does not exist, building...`)
    publishImage(
      'base',
      [firstTag, baseVersionTag, lastTag],
      `docker buildx build -f docker/base/Dockerfile -t ${firstTag} .`,
    )
  }
}

export function publishRelease(repo: string) {
  const lastTag = `${repo}:latest`
  const baseVersionTag = `${repo}:${packageBaseVersion}`
  const firstTag = `${repo}:${packageVersion}`

  publishImage(
    'release',
    [firstTag, baseVersionTag, lastTag],
    [
      'docker buildx build',
      `--secret "id=npm,src=${process.env.HOME}/.npmrc"`,
      `--build-arg BASE_IMAGE=${baseImageTag(repo)}`,
      '-f docker/release/Dockerfile',
      `-t ${firstTag}`,
      '.',
    ].join(' '),
  )
}
