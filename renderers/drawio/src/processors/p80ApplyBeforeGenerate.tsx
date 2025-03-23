import type { DrawioContext, DrawioNodeTree } from '../types.js'

function runCallback(context: DrawioContext, node: DrawioNodeTree) {
  const callback: (node: DrawioNodeTree, root: DrawioNodeTree) => void =
    (node._props as any)._beforeGenerate
  if (callback) {
    callback(node, context.rootNode)
  }
}

function applyNode(context: DrawioContext, _node: DrawioNodeTree) {
  runCallback(context, _node)
  _node._children.map((c: any) => applyNode(context, c))
}

function applyDependency(context: DrawioContext) {
  context.dependencies.map((d) => {
    runCallback(context, d)
  })
}

export const p80ApplyBeforeGenerate = (context: DrawioContext) => {
  applyNode(context, context.rootNode)
  applyDependency(context)
}
