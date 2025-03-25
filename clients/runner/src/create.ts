import * as cli from 'jsr:@std/cli@1.0.14'
import * as fs from 'jsr:@std/fs@1.0.14'
import chalk from 'npm:chalk@5.4.1'
import { execa } from 'npm:execa@9.5.2'

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

const performCreate=async ()=>{
  const args = cli.parseArgs(Deno.args, {
    boolean: ['no-git','gitlab','github',],
    default: {
      'no-git': false,
      'gitlab': false,
      'github': false,
    },
  })

  console.log('Creating new ReactIAC project')
  const projectHome=args._[1] as string
  if(fs.existsSync(projectHome)){
    console.log(chalk.red(`Error: project ${projectHome} already exists`))
    Deno.exit(1)
  }


  Deno.mkdirSync(projectHome,{recursive:true})
  console.log(chalk.grey(`  created folder ${projectHome}`))

  if(!args["no-git"]){
    Deno.writeTextFileSync(`${projectHome}/.gitignore`,`# ReactIAC
.reactiacrc.local
**/.terraform
**/.terraform.lock.hcl
**/*.tf.json
**/tf.plan
**/tf.plan.json
**/terraform.tfstate
**/terraform.tfstate.backup

# IDE
.idea
.devcontainer.json
`)
    console.log(chalk.grey(`  created .gitignore`))

    if(args.github){
      Deno.mkdirSync(`${projectHome}/.github/workflows`,{recursive:true})
      Deno.writeTextFileSync(`${projectHome}/.github/workflows/main.yml`,`- TODO`)
      console.log(chalk.grey(`  created .github/workflows/main.yml`))
    }

    if(args.gitlab){
      Deno.writeTextFileSync(`${projectHome}/.gitlab-ci.yml`,`- TODO`)
      console.log(chalk.grey(`  created .gitlab-ci.yml`))
    }

    await execa('git', ['init','--initial-branch=main'], {
      cwd:projectHome,
      stdio: 'inherit',
    })
  }


  Deno.writeTextFileSync(`${projectHome}/App.tsx`,`import React from 'react'

import { Shape } from '@reactiac/base-components'

const WebApp = (props: any) => <Shape {...props} />

const Client = (props: any) => <Shape _dependsOn="Load Balancer" {...props} />

const Cloud = (props: any) => <Shape {...props} />

const Subnet = (props: any) => <Shape _direction="vertical" {...props} />

const PublicSubnet = (props: any) => <Subnet {...props} />

const PrivateSubnet = (props: any) => <Subnet {...props} />

const LoadBalancer = (props: any) => (
  <Shape _dependsOn={['Firewall', 'Application']} {...props} />
)

const Application = (props: any) => <Shape _dependsOn="Postgres" {...props} />

const Firewall = (props: any) => <Shape {...props} />

const Postgres = (props: any) => <Shape {...props} />

export default function App() {
  return (
    <WebApp>
      <Client />
      <Cloud>
        <PublicSubnet>
          <LoadBalancer />
          <Firewall />
        </PublicSubnet>
        <PrivateSubnet>
          <Application />
          <Postgres />
        </PrivateSubnet>
      </Cloud>
    </WebApp>
  )
}
`)
  console.log(chalk.grey(`  created App.tsx`))




  Deno.writeTextFileSync(`${projectHome}/README.md`,`# ${args._[1]} - A ReactIAC Project

## Development

Open the project in a devcontainer:
  
    reactiac devcontainer
    
## Generate Diagram
  
    reactiac diagram generate
`)
  console.log(chalk.grey(`  created README.md`))


  console.log(chalk.green(`Created project ${projectHome}`))
  console.log(`\nYou may now run the following commands to get started:`)
  console.log(chalk.gray(`\n  cd ${projectHome}`))
  console.log(chalk.gray(`  reactiac devcontainer`))
}

export const createProject=async (args:any)=>{
  if (args._[0]=== 'create') {
    if (args._.length === 1) {
      showHelp()
    }else{
      await performCreate()
    }
    Deno.exit(0)
  }
}
