import { processDependencyAttributes } from './Dependency.js'
import { NodeProps } from '../types.js'
import { NodeContext, useNode } from '../contexts/NodeContext.js'
import jsxRender from '../contexts/jsxNode.js'

/**
 * The root component of all shapes or IaC nodes based from
 */
export default function Node(props: NodeProps) {
  const node = useNode(props)
  processDependencyAttributes(node._props, node)
  return (
    <>
      <NodeContext.Provider value={node}>
        {jsxRender(node._props)}
      </NodeContext.Provider>
    </>
  )
}
