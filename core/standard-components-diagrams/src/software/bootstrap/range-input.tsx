import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const RANGE_INPUT = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.rangeInput;dx=0.78;strokeColor=#9D968E;fillColor=#E3DDD8;fontColor=#777777;whiteSpace=wrap;align=left;verticalAlign=bottom;fontStyle=0;fontSize=14;labelPosition=center;verticalLabelPosition=top;gradientColor=#F4F2EF;gradientDirection=north;rangeStyle=rect;handleStyle=rect;',
  },
  _original_width: 800,
  _original_height: 20,
}

export function RangeInput(props: DiagramNodeProps) {
  return (
    <Shape
      {...RANGE_INPUT}
      {...props}
      _style={extendStyle(RANGE_INPUT, props)}
    />
  )
}
