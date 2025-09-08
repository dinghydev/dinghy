import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ROLL_8 = {
  _style: {
    entity:
      'html=1;shape=mxgraph.infographic.ribbonSimple;notch1=0;notch2=20;fillColor=#F5AB50;strokeColor=none;align=right;verticalAlign=middle;fontColor=#ffffff;fontSize=14;fontStyle=1;shadow=0;spacingRight=25;',
  },
  _original_width: 7,
  _original_height: 400,
}

export function Roll8(props: DiagramNodeProps) {
  return <Shape {...ROLL_8} {...props} _style={extendStyle(ROLL_8, props)} />
}
