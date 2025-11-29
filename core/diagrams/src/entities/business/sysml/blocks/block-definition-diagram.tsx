import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BLOCK_DEFINITION_DIAGRAM = {
  _style: {
    entity:
      'html=1;shape=mxgraph.sysml.package;labelX=120;align=left;spacingLeft=10;overflow=fill;recursiveResize=0;',
  },
  _width: 0,
  _height: 100,
}

export function BlockDefinitionDiagram(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, BLOCK_DEFINITION_DIAGRAM)} />
  )
}
