import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ROLL_9 = {
  _style: {
    entity:
      'html=1;shape=mxgraph.infographic.ribbonSimple;notch1=0;notch2=20;fillColor=#F8C382;strokeColor=none;align=right;verticalAlign=middle;fontColor=#ffffff;fontSize=14;fontStyle=1;shadow=0;spacingRight=25;',
  },
  _width: 8,
  _height: 400,
}

export function Roll9(props: NodeProps) {
  return <Shape {...ROLL_9} {...props} _style={extendStyle(ROLL_9, props)} />
}
