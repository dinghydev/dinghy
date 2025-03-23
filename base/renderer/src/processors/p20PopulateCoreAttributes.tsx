import type { ReactElement } from 'react'
import type { NodeTree } from '@reactiac/base-components'
import { utils } from '@reactiac/base-components'
const { camelCaseToWords, toId, toName } = utils
import type { HostContainer } from '../types.js'

const defaultTags = (
  node: NodeTree,
  fiber: any,
  usedIds: string[],
  tags: string[] = [],
  started = false,
) => {
  const type = fiber.type
  if (typeof type === 'function') {
    if (type.name === 'Node') {
      defaultTags(node, fiber.return, usedIds, tags, !started)
    } else {
      if (typeof fiber.return.type === 'function') {
        defaultTags(node, fiber.return, usedIds, tags, started)
      }
      tags.push(type.name)
    }
  } else {
    defaultTags(node, fiber.return, usedIds, tags, started)
  }
  return tags
}

const firstTag = (node: NodeTree): string => {
  return (node._props._tags as string[])[node._props._level === 1 ? 1 : 0]
}

const defaultType = (node: NodeTree) => {
  return camelCaseToWords(firstTag(node)).toLowerCase().replaceAll(' ', '_')
}

const defaultTitle = (node: NodeTree) => {
  return camelCaseToWords(firstTag(node))
}

const defaultName = (node: NodeTree) => {
  return (node._props as any).key || (node._props._title as string)
}

const defaultId = (node: NodeTree, _fiber: any, usedIds: string[]) => {
  const typeId = toId(node._props._type as string)
  const nameId = toId(node._props._name as string)
  let id = typeId !== nameId ? `${typeId}_${nameId}` : typeId
  if (node._props._version) {
    id = `${id}_${node._props._version}`
  }
  let i = 2
  while (true) {
    if (!usedIds.includes(id)) {
      return id
    }
    id = `${typeId}_${i}`
    if (!node._props._isDependency) {
      console.warn('WARNING: unstable id generated', id)
    }
    i++
  }
}

const COPY_STRING_VALUE_FIELDS = ['title', 'name', 'id']

const populateField = (
  fiber: any,
  node: NodeTree,
  field: string,
  usedIds: string[],
  defaultValue: (node: NodeTree, fiber: any, usedIds: string[]) => unknown,
) => {
  const internalField = `_${field}`
  let value = (node._props as any)[field]
  if (!COPY_STRING_VALUE_FIELDS.includes(field) || typeof value !== 'string') {
    value = (node._props as any)[internalField] || defaultValue
    if (typeof value === 'function') {
      value = value(node, fiber, usedIds)
    }
    if (!value) {
      value = defaultValue(node, fiber, usedIds)
    }
  }
  if (field === 'id') {
    ;(node._props as any)[internalField] = toId(value)
  } else if (field === 'name') {
    ;(node._props as any)[internalField] = toName(value)
  } else {
    ;(node._props as any)[internalField] = value
  }
  return value
}

const populateNodeAttributes = (element: ReactElement, usedIds: string[]) => {
  const fiber = (element as any).fiber
  const _node = (element as any).props._node as NodeTree
  populateField(fiber, _node, 'tags', usedIds, defaultTags)
  populateField(fiber, _node, 'type', usedIds, defaultType)
  populateField(fiber, _node, 'title', usedIds, defaultTitle)
  populateField(fiber, _node, 'name', usedIds, defaultName)
  const id = populateField(fiber, _node, 'id', usedIds, defaultId) as string
  if (usedIds.includes(id)) {
    throw new Error(`Duplicated id ${id} found!`)
  }
  usedIds.push(id)
}

function populateAttributes(element: ReactElement, usedIds: string[] = []) {
  populateNodeAttributes(element, usedIds)
  ;(element.props as any).children?.map((c: ReactElement) => {
    populateAttributes(c, usedIds)
  })
}

export const p20PopulateCoreAttributes = (
  container: HostContainer<unknown, unknown>,
) => {
  populateAttributes(container.rootElement as ReactElement)
}
