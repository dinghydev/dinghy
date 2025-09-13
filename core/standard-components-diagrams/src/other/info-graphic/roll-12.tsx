import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ROLL_12 = {
  _style: {
    entity:
      'html=1;shape=mxgraph.infographic.ribbonSimple;notch1=0;notch2=20;fillColor=#5D7F99;strokeColor=none;align=right;verticalAlign=middle;fontColor=#ffffff;fontSize=14;fontStyle=1;shadow=0;spacingRight=25;',
  },
  _width: 11,
  _height: 400,
}

export function Roll12(props: DiagramNodeProps) {
  return <Shape {...ROLL_12} {...props} _style={extendStyle(ROLL_12, props)} />
}
