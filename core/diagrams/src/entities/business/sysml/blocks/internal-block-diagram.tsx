import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const INTERNAL_BLOCK_DIAGRAM = {
  _style: {
    entity:
      'html=1;shape=mxgraph.sysml.package;labelX=100;align=left;spacingLeft=10;html=1;overflow=fill;whiteSpace=wrap;recursiveResize=0;',
  },
  _width: 0,
  _height: 100,
}

export function InternalBlockDiagram(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, INTERNAL_BLOCK_DIAGRAM)} />
  )
}
