let allPackages: string[] = []
const addPacakge = (p: string) => {
  if (
    p.includes('*') || p.includes('+') || p.includes('_react') ||
    allPackages.includes(p)
  ) {
    return
  }
  allPackages.push(p)
}

for (const file of ['locks/deno.lock', 'locks/standalone-deno.lock']) {
  const lock = JSON.parse(Deno.readTextFileSync(file))
  for (const type of ['jsr', 'npm']) {
    for (const p of Object.keys(lock[type])) {
      addPacakge(`${type}:${p}`)
    }
  }
  for (const m of Object.values(lock.workspace.members)) {
    for (const d of (m as any).dependencies) {
      addPacakge(d as string)
    }
  }
}
allPackages = allPackages.sort()
let batch: string[] = []
const installBatch = async (i: number) => {
  const p = batch.join(' ')
  console.log(
    'Installing [',
    i - batch.length + 1,
    '-',
    i,
    '/',
    allPackages.length,
    ']',
    p,
  )
  const command = new Deno.Command(Deno.execPath(), {
    args: ['install', ...batch],
  })

  const { code, stdout, stderr } = await command.output()
  if (code !== 0) {
    console.error(new TextDecoder().decode(stdout))
    console.error(new TextDecoder().decode(stderr))
    throw new Error(`Failed to install dependencies`)
  }
  batch = []
}
for (let i = 0; i < allPackages.length; i++) {
  const p = allPackages[i]
  const prefix = p.substring(0, p.lastIndexOf('@') + 1)
  if (
    batch.length &&
    (batch.length === 10 || batch.slice(-1)[0].startsWith(prefix))
  ) {
    await installBatch(i + 1)
  }
  batch.push(p)
}
if (batch.length > 0) {
  await installBatch(allPackages.length)
}
