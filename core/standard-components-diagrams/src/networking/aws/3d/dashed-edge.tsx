import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DASHED_EDGE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;strokeWidth=1;align=center;outlineConnect=0;dashed=0;outlineConnect=0;shape=mxgraph.aws3d.dashedEdge2;strokeColor=#2D6195;aspect=fixed;',
  },
  _original_width: 31.6,
  _original_height: 18,
}

export function DashedEdge(props: DiagramNodeProps) {
  return (
    <Shape
      {...DASHED_EDGE}
      {...props}
      _style={extendStyle(DASHED_EDGE, props)}
    />
  )
}
