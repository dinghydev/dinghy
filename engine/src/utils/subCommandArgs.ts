export const subCommandArgs = (
  args: string[],
  startIndex = 1,
) => {
  const commandArgs = args.slice(startIndex)
  if (commandArgs.includes('--debug')) {
    const debugIndex = commandArgs.indexOf('--debug')
    commandArgs.splice(debugIndex, 1)
  }
  return commandArgs
}
