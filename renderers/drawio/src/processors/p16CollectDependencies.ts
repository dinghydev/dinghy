import type { DrawioContext, DrawioNodeTree } from '../types.js'

function moveDependencyNode(
  parent: DrawioNodeTree,
  node: DrawioNodeTree,
  dependencies: DrawioNodeTree[],
) {
  if (node._props._isDependency) {
    dependencies.push(node)
    parent._children.splice(parent._children.indexOf(node), 1)
  } else {
    Object.values(node._children).map((c) => {
      moveDependencyNode(node, c, dependencies)
    })
  }
}

export const p16CollectDependencies = ({
  rootNode,
  dependencies,
}: DrawioContext) => {
  moveDependencyNode(rootNode, rootNode, dependencies)
}
