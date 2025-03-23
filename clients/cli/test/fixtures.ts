import { dirname } from 'node:path'

const appPath = (name: string) => {
  const url = new URL(import.meta.url)
  const currentFilePath = new URL(import.meta.url).pathname
  return `${dirname(currentFilePath)}/fixtures/${name}`
}

export const simpleApp = () => appPath('simple-app')
export const standardDiagramsApp = () => appPath('standard-diagrams')
export const standardTfAwsApp = () => appPath('standard-tf-aws')

export const allFixtures = () => [
  simpleApp(),
  standardDiagramsApp(),
  standardTfAwsApp(),
]
