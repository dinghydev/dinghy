import type { NodeTree, Props } from '@dinghy/base-components'
import { resource } from './resource.ts'
import { data } from './data.ts'
import { terraform } from './terraform.ts'
import { provider } from './provider.ts'
import type { TfRenderOptions } from '../types.ts'

export const requiredSchema = (node: NodeTree, schemaField: string) => {
  const schema = (node._props as any)[schemaField]
  if (!schema) {
    throw new Error(`Schema ${schemaField} not found in ${node._props._id}`)
  }
  return schema
}

const categoryHandlers: Props = {
  resource,
  data,
  terraform,
  provider,
}

const ALL_CATEGORIES = Object.keys(categoryHandlers)

export function handleCategory(
  renderOptions: TfRenderOptions,
  tfRoot: Props,
  node: NodeTree,
) {
  let category = (node._props as any)._category
  if (!category) {
    category = ALL_CATEGORIES.find((k) => `_${k}` in node._props) || 'resource'
    ;(node._props as any)._category = category
  }

  const categoryFunction = categoryHandlers[category] as
    | ((
      renderOptions: TfRenderOptions,
      category: string,
      tfRoot: Props,
      node: NodeTree,
    ) => Props)
    | undefined
  if (categoryFunction) {
    categoryFunction(renderOptions, category, tfRoot, node)
  } else {
    throw new Error(`Category ${category} not found`)
  }
}
