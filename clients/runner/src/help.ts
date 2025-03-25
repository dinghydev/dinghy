const RELEASE_VERSION='0.1.0'
const version=()=>`${RELEASE_VERSION} ${Deno.build.os}-${Deno.build.arch}`

export const showVersion=(args:any)=>{
  if (args.version) {
    console.log(version())
    Deno.exit(0)
  }
}

export const showHelp=(args:any)=>{
  if (args._.length === 0 || args.help) {
    console.log(`
ReactIAC Runner, a CLI tool to help with ReactIAC development and operations
    
    VERSION
      ${version()}
    
    USAGE
      $ reactiac [FLAGS] [TOPIC] [COMMAND]
      
    COMMANDS
      create         Create a new ReactIAC project
      devcontainer   Open project in a devcontainer [alias: dc]
      
    TOPICS
      diagram        Perform diagram related actions
      tf             Perform Terraform/OpenTofu related actions

    FLAGS
      -h, --help      Show help
      -v, --version   Print out the version of the runner
      --debug         Turn on debug mode
  `)
    Deno.exit(0)
  }
}
