import type { DrawioContext, DrawioNodeTree } from '../types.ts'

// function isParent(_node: NodeTree, lookup: NodeTree) {
//   if (_node === lookup) {
//     return true
//   }
//   if (lookup._parent) {
//     return isParent(_node, lookup._parent)
//   }
//   return false
// }

// function isParentChildRelationship(_node1: NodeTree, _node2: NodeTree) {
//   return isParent(_node1, _node2) || isParent(_node2, _node1)
// }

// function moveRelationship(
//   moveTo: DrawioNodeTree,
//   node: DrawioNodeTree,
//   dependencies: DrawioNodeTree[],
//   fromField: DependsType,
//   movedFrom: DrawioNodeTree,
// ) {
//   const relationship = dependencies.find((d) => {
//     if (fromField === '_dependsOn') {
//       return (
//         (d._props as any)._source === node &&
//         (d._props as any)._target === movedFrom
//       )
//     }
//     return (
//       (d._props as any)._target === node &&
//       (d._props as any)._source === movedFrom
//     )
//   })!

//   if (isParentChildRelationship(moveTo, movedFrom)) {
//     const index = dependencies.indexOf(relationship)
//     if (index !== -1) {
//       dependencies.splice(index, 1)
//     }
//   } else {
//     moveTo[fromField] ??= []
//     moveTo[fromField].push(movedFrom)
//     if (fromField === '_dependsOn') {
//       ;(relationship._props as any)._source = moveTo
//     } else {
//       ;(relationship._props as any)._target = moveTo
//     }
//   }
// }

// function moveRelationships(
//   moveTo: DrawioNodeTree,
//   node: DrawioNodeTree,
//   dependencies: DrawioNodeTree[],
//   fromField: DependsType,
// ) {
//   const depends = node[fromField]
//   if (depends) {
//     depends.map((d: DrawioNodeTree) =>
//       moveRelationship(moveTo, node, dependencies, fromField, d)
//     )
//   }
// }

function removeNode(
  moveTo: DrawioNodeTree,
  node: DrawioNodeTree,
  dependencies: DrawioNodeTree[],
) {
  // moveRelationships(moveTo, node, dependencies, '_dependsOn')
  // moveRelationships(moveTo, node, dependencies, '_dependsBy')
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
  if (rootNode._children.length === 0) {
    throw new Error('No visibile element found!')
  }
  if ((renderOptions as any).view?.name !== 'all') {
    processHiddenFlag(rootNode, dependencies)
  }
}
