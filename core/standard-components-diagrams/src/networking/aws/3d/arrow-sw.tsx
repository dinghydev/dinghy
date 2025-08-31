import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ARROW_SW = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;strokeWidth=1;align=center;outlineConnect=0;dashed=0;outlineConnect=0;shape=mxgraph.aws3d.arrowSW;fillColor=#000000;aspect=fixed;',
  },
  _width: 45.5,
  _height: 26,
}

export function ArrowSw(props: DiagramNodeProps) {
  return (
    <Shape {...ARROW_SW} {...props} _style={extendStyle(ARROW_SW, props)} />
  )
}
