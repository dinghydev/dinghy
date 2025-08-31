import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const QUICKSIGHT = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.quicksight;fillColor=#00B7F4;gradientColor=none;',
  },
  _width: 60,
  _height: 60,
}

export function Quicksight(props: DiagramNodeProps) {
  return (
    <Shape {...QUICKSIGHT} {...props} _style={extendStyle(QUICKSIGHT, props)} />
  )
}
