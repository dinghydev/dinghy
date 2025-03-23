import type { NodeTree, Props } from '@reactiac/base-components'
import { resource } from './resource.js'
import { data } from './data.js'
import { terraform } from './terraform.js'
import { provider } from './provider.js'
import { utils } from '@reactiac/base-components'
const { deepResolve } = utils
import { none } from './none.js'

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
  none,
}

const ALL_CATEGORIES = Object.keys(categoryHandlers)

export function handleCategory(tfRoot: Props, node: NodeTree) {
  let category = deepResolve(node, node._props, '_category')
  if (!category) {
    category = ALL_CATEGORIES.find((k) => `_${k}` in node._props) || 'resource'
    ;(node._props as any)._category = category
  }

  const categoryFunction = categoryHandlers[category] as
    | ((category: string, tfRoot: Props, node: NodeTree) => Props)
    | undefined
  if (categoryFunction) {
    categoryFunction(category, tfRoot, node)
  } else {
    throw new Error(`Category ${category} not found`)
  }
}
