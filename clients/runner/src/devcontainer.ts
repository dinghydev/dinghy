import * as cli from 'jsr:@std/cli@1.0.14'
import * as fs from 'jsr:@std/fs@1.0.14'
import chalk from 'npm:chalk@5.4.1'
import { execa } from 'npm:execa@9.5.2'
import { dockerImage } from "./dockerImage.ts";
import { appHome } from "./loadAppConfig.ts";
import { loadRc } from "./loadRc.ts";

const showHelp=()=>{
  console.log(`
Create a new ReactIAC project

    USAGE
      $ reactiac create [FLAGS] PROJECT_NAME

    FLAGS
      --no-git        Do not create git repository
      --gitlab        Init git with GitLab .gitlab-ci.yml
      --github        Init git with GitHub Actions
  `)
}

const performStart=async ()=> {
  const apphome=appHome()
  if (!fs.existsSync(`${apphome}/App.tsx`)) {
    console.log(chalk.red(`Error: no App.tsx found in current directory`))
    Deno.exit(1)
  }

  if (!fs.existsSync(`${apphome}/.devcontainer`)) {
    {
      const envs:string[]=[]

        loadRc().forEach((rc) => {
          envs.push(`"${rc[0]}":"${rc[1]}"`)
        })
      const envsStr=envs.length>0?`
  "containerEnv": {
    ${envs.join(',\n   ')}
  },`:''

      const mounts:string[][]=[
        [apphome,'/workspace/app'],
        ['/var/run/docker.sock','/var/run/docker.sock','/var/run/docker.sock'],
        ['\${localEnv:HOME}/.aws','/root/.aws',`${Deno.env.get('HOME')}/.aws`],
        ['\${localEnv:HOME}/.ssh','/root/.ssh',`${Deno.env.get('HOME')}/.ssh`],
      ]

      const mountsStr=mounts.
      filter(([source,target,local])=>(!local || fs.existsSync(local))).
      map((([source,target])=>
        `"source=${source},target=${target},type=bind"`
      )).join(',\n    ')

      Deno.writeTextFileSync(`${apphome}/.devcontainer.json`, `{
  "name": "${apphome.split('/').pop()}",
  "workspaceFolder": "/workspace",
  "image": "${dockerImage()}",
  ${envsStr}
  "mounts": [
    ${mountsStr}
  ],
  "customizations": {
    "vscode": {
      "extensions": [
        "ms-azuretools.vscode-docker",
        // "biomejs.biome"
      ]
    }
  }
}
`)
    }
    await execa('devcontainer', ['open'], {
      stdio: 'inherit',
    })
  }
}

export const devcontainerStart=async (args:any)=>{
  if (args._[0]=== 'devcontainer' || args._[0]=== 'dc') {
    await performStart()
    Deno.exit(0)
  }
}
