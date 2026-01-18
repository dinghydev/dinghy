import {
  deepMerge,
  deepResolve,
  type NodeTree,
  type Props,
} from '@dinghy/base-components'
import type { TfRenderOptions } from './types.ts'

const requiredSchema = (node: NodeTree, schemaField: string) => {
  const schema = (node._props as any)[schemaField]
  if (!schema) {
    throw new Error(`Schema ${schemaField} not found in ${node._props._id}`)
  }
  return schema
}

export function handleCategory(
  renderOptions: TfRenderOptions,
  tfRoot: Props,
  node: NodeTree,
) {
  const category = (node._props as any)._category
  if (Array.isArray(category)) {
    handlePrimaryCategory(renderOptions, tfRoot, node, category[0])
    category.slice(1).forEach((c) => {
      handleRawCategory(tfRoot, node, c)
    })
  } else {
    handlePrimaryCategory(renderOptions, tfRoot, node, category)
  }
}

const handlePrimaryCategory = (
  renderOptions: TfRenderOptions,
  tfRoot: Props,
  node: NodeTree,
  category: string,
) => {
  let schema: any
  let tfElement: any
  if (node._props[`_${category}`]) {
    tfElement = handleRawCategory(tfRoot, node, category)
  } else {
    schema = requiredSchema(node, '_inputSchema')
    try {
      tfElement = schema.parse(node._props)
    } catch (e) {
      console.error('Failed to parse props', node._props)
      throw e
    }
    setTfElement(tfRoot, node, category, tfElement)
  }
  if (category === 'resource') {
    if (schema.shape.tags) {
      tfElement.tags ??= {}
      tfElement.tags['Name'] ??= node._props._title
      tfElement.tags['iac:id'] ??= node._props._consolidatedId ||
        node._props._id
    }

    if (
      renderOptions.tf?.generateImport && node._props?._importSchema
    ) {
      handleImportSchema(tfRoot, node)
    }
  }
}

const handleRawCategory = (
  tfRoot: Props,
  node: NodeTree,
  category: string,
) => {
  const tfElement: any = node._props[`_${category}`]
  if (!tfElement) {
    throw new Error(
      `Category value [_${category}] not found in ${node._props._id}`,
    )
  }
  setTfElement(tfRoot, node, category, tfElement)
  return tfElement
}

const setTfElement = (
  tfRoot: Props,
  node: NodeTree,
  category: string,
  tfElement: any,
) => {
  const tfCategory: any = tfRoot[category] ??= {}
  deepResolve(tfElement)
  removeDoubleUnderscorePrefix(tfElement)
  addDependsOnForReferences(tfElement)

  if (category === 'terraform') {
    deepMerge(tfCategory, tfElement)
  } else if (category === 'provider') {
    const { providerId, ...provider } = tfElement
    const providerConfig: any = tfCategory[providerId] ??= []
    providerConfig.push(provider)
  } else if (category === 'output') {
    const id: any = node._props._consolidatedId || node._props._id
    tfCategory[id] = tfElement
  } else {
    const id: any = node._props._consolidatedId || node._props._id
    const tfElements: any = tfCategory[node._props._type as any] ??= {}
    tfElements[id] = tfElement
  }
}

const handleImportSchema = (
  tfRoot: Props,
  node: NodeTree,
) => {
  let identity: any
  try {
    identity = node._props!._importSchema!.parse(node._props) as Props
  } catch (_ignore) {
    return
  }
  if (identity && Object.keys(identity).length > 0) {
    deepResolve(identity)
    removeDoubleUnderscorePrefix(identity)
    const imports = (tfRoot.import ??= []) as any[]
    const to = `${node._props._type}.${
      node._props._consolidatedId || node._props._id
    }`
    const existingIndex = imports.findIndex((imp) => imp.to === to)
    if (existingIndex !== -1) {
      imports.splice(existingIndex, 1)
    }
    imports.push({
      to,
      identity,
    })
  }
}

function removeDoubleUnderscorePrefix(element: any): any {
  Object.keys(element).forEach((key) => {
    if (key.startsWith('__')) {
      element[key.slice(2)] = element[key]
      delete element[key]
    }
  })
  return element
}

function addDependsOnForReferences(element: any): any {
  if (!element.depends_on) {
    const references: string[] = []
    collectReferences(element, references)
    if (references.length > 0) {
      element.depends_on = references
    }
  }
}

function collectReferences(element: any, references: string[]): any {
  if (typeof element === 'string') {
    const regex = /\$\{([^}]+)\}/g
    let match
    while ((match = regex.exec(element)) !== null) {
      const sectionParts = match[1].split('.')
      if (sectionParts.length >= 2) {
        if (sectionParts[0] !== 'data') {
          const reference = `${sectionParts[0]}.${sectionParts[1]}`
          if (!reference.includes(' ') && !references.includes(reference)) {
            references.push(reference)
          }
        }
      }
    }
  } else if (Array.isArray(element)) {
    element.forEach((item) => {
      collectReferences(item, references)
    })
  } else if (typeof element === 'object' && element !== null) {
    Object.keys(element).forEach((key) => {
      collectReferences(element[key], references)
    })
  }
}
