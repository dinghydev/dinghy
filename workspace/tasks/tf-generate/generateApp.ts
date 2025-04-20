import type { Element } from './types.ts'

export function generateApp(_args: any, cloud: Element) {
  const imports: Record<string, Set<string>> = {}

  const collectImports = (element: Element) => {
    const namespace = element.namespace || ''
    imports[namespace] ??= new Set()
    imports[namespace].add(element.tag)
    if (element.children) {
      for (const child of element.children) {
        collectImports(child)
      }
    }
  }
  collectImports(cloud)

  const generateImports = () => {
    return Object.keys(imports).sort().map((namespace) =>
      `import {
  ${Array.from(imports[namespace]).join(',\n  ')}
} from '@reactiac/standard-components-tf-aws${
        namespace ? `/${namespace}` : ''
      }'`
    ).join('\n\n')
  }

  const generateAttributes = (element: Element, indent: number) => {
    return Object.entries(element.attributes || {}).map(([key, value]) => {
      if (typeof value === 'string') {
        if (value !== '') {
          return `${key}="${value}"`
        } else {
          return null
        }
      }
      if (typeof value === 'boolean') {
        return value ? `${key}` : null
      }
      if (typeof value === 'number') {
        return `${key}={${value}}`
      }
      return `${key}={${JSON.stringify(value)}}`
    }).filter(Boolean).join(`\n${' '.repeat(indent + 4)}`)
  }

  const generateTag = (element: Element, indent: number): string => {
    if (element.children) {
      return `${' '.repeat(indent)}<${element.tag} ${
        generateAttributes(element, indent)
      }>
${element.children.map((child) => generateTag(child, indent + 2)).join('\n')}
${' '.repeat(indent)}</${element.tag}>`
    }
    return `${' '.repeat(indent)}<${element.tag} ${
      generateAttributes(element, indent)
    } />`
  }

  const app = `
import { Stack } from '@reactiac/base-components'

${generateImports()}

export function App() {
  return (
    <Stack>
${generateTag(cloud, 6)}
    </Stack>
  )
}

`

  return app.trim()
}
