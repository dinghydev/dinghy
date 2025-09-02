import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ROLL_9 = {
  _style: {
    entity:
      'html=1;shape=mxgraph.infographic.ribbonSimple;notch1=0;notch2=20;fillColor=#F8C382;strokeColor=none;align=right;verticalAlign=middle;fontColor=#ffffff;fontSize=14;fontStyle=1;shadow=0;spacingRight=25;',
  },
  _original_width: 8,
  _original_height: 400,
}

export function Roll9(props: DiagramNodeProps) {
  return <Shape {...ROLL_9} {...props} _style={extendStyle(ROLL_9, props)} />
}
