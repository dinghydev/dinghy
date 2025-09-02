import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const INTERNAL_BLOCK_DIAGRAM = {
  _style: {
    entity:
      'html=1;shape=mxgraph.sysml.package;labelX=100;align=left;spacingLeft=10;html=1;overflow=fill;whiteSpace=wrap;recursiveResize=0;',
  },
  _original_width: 0,
  _original_height: 100,
}

export function InternalBlockDiagram(props: DiagramNodeProps) {
  return (
    <Shape
      {...INTERNAL_BLOCK_DIAGRAM}
      {...props}
      _style={extendStyle(INTERNAL_BLOCK_DIAGRAM, props)}
    />
  )
}
