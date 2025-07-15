import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ROLL_13 = {
  _style:
    'html=1;shape=mxgraph.infographic.ribbonSimple;notch1=0;notch2=20;fillColor=#2F5B7C;strokeColor=none;align=right;verticalAlign=middle;fontColor=#ffffff;fontSize=14;fontStyle=1;shadow=0;spacingRight=25;',
  _width: 12,
  _height: 400,
}

export function Roll13(props: DiagramNodeProps) {
  return <Shape {...ROLL_13} {...props} />
}
