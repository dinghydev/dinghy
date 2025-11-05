import { processDependencyAttributes } from './Dependency.tsx'
import type { NodeProps } from '../types/index.ts'
import { NodeContext, useNode } from '../contexts/NodeContext.tsx'
import jsxRender from '../contexts/jsxNode.tsx'

/**
 * The root component of all shapes based from
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
