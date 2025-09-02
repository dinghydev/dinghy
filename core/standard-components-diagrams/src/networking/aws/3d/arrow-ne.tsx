import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ARROW_NE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;strokeWidth=1;align=center;outlineConnect=0;dashed=0;outlineConnect=0;shape=mxgraph.aws3d.arrowNE;fillColor=#000000;aspect=fixed;',
  },
  _original_width: 45.5,
  _original_height: 26,
}

export function ArrowNe(props: DiagramNodeProps) {
  return (
    <Shape {...ARROW_NE} {...props} _style={extendStyle(ARROW_NE, props)} />
  )
}
