import type { NodeTree } from '@reactiac/base-components'
import type { HostContainer } from '../types.ts'

export const p40CollectViewsAndStages = (
  container: HostContainer<unknown, unknown>,
) => {
  const addIfNotExist = (field: string, value: string) => {
    if (value === '*') {
      if (field === 'views') {
        value = 'all'
      } else {
        return
      }
    }
    const target = (container as any)[field]
    if (value && !target.includes(value)) {
      target.push(value)
    }
  }

  const handleField = (field: string, value: string) => {
    if (Array.isArray(value)) {
      value.map((v: string) => {
        addIfNotExist(field, v)
      })
    } else if (typeof value === 'object') {
      addIfNotExist(field, (value as any).name)
    } else {
      addIfNotExist(field, value)
    }
  }

  const addAllView = (node: NodeTree) => {
    if ((node._props as any)._display) {
      addIfNotExist('views', 'all')
    }
  }

  const collectModelsFromElement = (node: NodeTree) => {
    const { _props } = node
    handleField('views', (node._props as any)._view || 'overview')
    handleField('stages', (node._props as any)._stage || 'main')
    addAllView(node)
    node._children.map((child: any) => collectModelsFromElement(child))
  }

  collectModelsFromElement((container.rootElement!.props as any)._node)
}
