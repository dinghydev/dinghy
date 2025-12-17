import type { TfContext, TfNodeTree } from '../types.ts'
import { deepResolve, IacCategorySchema } from '@dinghy/base-components'

const VALID_CATEGORIES = IacCategorySchema.options

function validateCategory(category: string) {
  if (!VALID_CATEGORIES.includes(category as any)) {
    throw new Error(
      `Unsupported category [${category}]; valid categories are [${
        IacCategorySchema.options.join(', ')
      }]`,
    )
  }
}

function resolve(node: TfNodeTree) {
  const { _props } = node
  if ((_props as any)._category) {
    deepResolve(_props, '_category')
    if (Array.isArray(_props._category)) {
      _props._category.map(validateCategory)
    } else {
      validateCategory(_props._category as string)
    }
  }

  node._children.map(resolve)
}

export const p10ResolveCategory = ({ rootNode }: TfContext) => {
  resolve(rootNode)
}
