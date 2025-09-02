import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const RANGE_INPUT_2 = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.rangeInput;dx=0.6;strokeColor=#0085FC;fillColor=#DEE2E6;fontColor=#777777;whiteSpace=wrap;align=left;verticalAlign=bottom;fontStyle=0;fontSize=14;labelPosition=center;verticalLabelPosition=top;',
  },
  _original_width: 800,
  _original_height: 20,
}

export function RangeInput2(props: DiagramNodeProps) {
  return (
    <Shape
      {...RANGE_INPUT_2}
      {...props}
      _style={extendStyle(RANGE_INPUT_2, props)}
    />
  )
}
