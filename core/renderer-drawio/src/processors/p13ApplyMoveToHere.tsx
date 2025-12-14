import type { DrawioContext, DrawioNodeTree } from '../types.ts'

function collectNodes(
  node: DrawioNodeTree,
  filter: (node: DrawioNodeTree) => boolean,
  collected: DrawioNodeTree[],
) {
  if (filter(node)) {
    collected.push(node)
  } else {
    Object.values(node._children).map((c) => {
      collectNodes(c, filter, collected)
    })
  }
}

function collectIncludes(
  root: DrawioNodeTree,
  node: DrawioNodeTree,
  filter: any,
  collected: DrawioNodeTree[],
) {
  if (typeof filter === 'function') {
    collectNodes(root, filter, collected)
  } else if (Array.isArray(filter)) {
    filter.forEach((f) => {
      collectIncludes(root, node, f, collected)
    })
  } else {
    collectNodes(
      root,
      (node: DrawioNodeTree) =>
        (node._props._tags as string[]).includes(filter) ||
        (node._props._id as string).includes(filter),
      collected,
    )
  }
  return collected
}

function removeExcluded(
  root: DrawioNodeTree,
  filter: any,
  collected: DrawioNodeTree[],
) {
  if (typeof filter === 'function') {
    collected = collected.filter((c) => !filter(c))
  } else if (Array.isArray(filter)) {
    filter.forEach((f) => {
      collected = removeExcluded(root, f, collected)
    })
  } else {
    collected = removeExcluded(
      root,
      (node: DrawioNodeTree) =>
        (node._props._tags as string[]).includes(filter) ||
        (node._props._id as string).includes(filter),
      collected,
    )
  }
  return collected
}

function handleMoveToHere(
  root: DrawioNodeTree,
  node: DrawioNodeTree,
) {
  const spec = node._props._inputSchema!.parse(node._props) as any
  const collected = collectIncludes(
    root,
    node,
    spec.includes,
    [] as DrawioNodeTree[],
  )
  const toBeMoved = removeExcluded(root, spec.excludes, collected)
  toBeMoved.map((c) => {
    c._parent!._children.splice(c._parent!._children.indexOf(c), 1)
    c._parent = node._parent
    if (c._props._consolidatedId) {
      const existing = node._parent!._children.find((c2) =>
        c2._props._consolidatedId === c._props._consolidatedId
      )
      if (existing) {
        c._children.map((c3) => {
          c3._parent = existing
          existing._children.push(c3)
        })
        return
      }
    }
    node._parent!._children.splice(node._parent!._children.indexOf(node), 0, c)
  })
  node._parent!._children.splice(node._parent!._children.indexOf(node), 1)
}

function scanForMoveToHere(
  root: DrawioNodeTree,
  node: DrawioNodeTree,
) {
  if ((node._props._tags as string[]).includes('MoveToHere')) {
    handleMoveToHere(root, node)
  } else {
    Object.values(node._children).map((c) => {
      scanForMoveToHere(root, c)
    })
  }
}

export const p13ApplyMoveToHere = ({
  rootNode,
}: DrawioContext) => {
  scanForMoveToHere(rootNode, rootNode)
}
