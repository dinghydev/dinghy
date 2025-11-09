import type { DrawioContext, DrawioNodeTree } from '../types.ts'

function removeNode(
  moveTo: DrawioNodeTree,
  node: DrawioNodeTree,
  dependencies: DrawioNodeTree[],
) {
  node._children.map((c: DrawioNodeTree) => removeNode(moveTo, c, dependencies))
  node._parent!._children.splice(node._parent!._children.indexOf(node), 1)
  if (node._parent!._children.length === 0) {
    node._parent!._props._diagram.flags.isEntity = true
  }
}

function processHiddenFlag(
  node: DrawioNodeTree,
  dependencies: DrawioNodeTree[],
) {
  if (node._props._diagram.flags.isHidden) {
    removeNode(node._parent!, node, dependencies)
  } else {
    Object.values(node._children).map((c) => {
      processHiddenFlag(c, dependencies)
    })
  }
}

export const p23ApplyFlagHidden = ({
  rootNode,
  dependencies,
  renderOptions,
}: DrawioContext) => {
  if ((renderOptions as any).view?.name !== 'all') {
    processHiddenFlag(rootNode, dependencies)
  }
}
