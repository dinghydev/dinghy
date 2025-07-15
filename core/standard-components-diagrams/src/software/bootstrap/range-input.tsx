import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const RANGE_INPUT = {
  _style:
    'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.rangeInput;dx=0.78;strokeColor=#9D968E;fillColor=#E3DDD8;fontColor=#777777;whiteSpace=wrap;align=left;verticalAlign=bottom;fontStyle=0;fontSize=14;labelPosition=center;verticalLabelPosition=top;gradientColor=#F4F2EF;gradientDirection=north;rangeStyle=rect;handleStyle=rect;',
  _width: 800,
  _height: 20,
}

export function RangeInput(props: DiagramNodeProps) {
  return <Shape {...RANGE_INPUT} {...props} />
}
