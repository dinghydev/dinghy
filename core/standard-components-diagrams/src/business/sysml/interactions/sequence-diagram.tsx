import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SEQUENCE_DIAGRAM = {
  _style: {
    entity:
      'html=1;shape=mxgraph.sysml.package;overflow=fill;labelX=95;align=left;spacingLeft=5;verticalAlign=top;spacingTop=-3;',
  },
  _width: 160,
  _height: 80,
}

export function SequenceDiagram(props: DiagramNodeProps) {
  return (
    <Shape
      {...SEQUENCE_DIAGRAM}
      {...props}
      _style={extendStyle(SEQUENCE_DIAGRAM, props)}
    />
  )
}
