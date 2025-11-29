import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const RANGE_INPUT_2 = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.rangeInput;dx=0.6;strokeColor=#0085FC;fillColor=#DEE2E6;fontColor=#777777;whiteSpace=wrap;align=left;verticalAlign=bottom;fontStyle=0;fontSize=14;labelPosition=center;verticalLabelPosition=top;',
  },
  _width: 800,
  _height: 20,
}

export function RangeInput2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, RANGE_INPUT_2)} />
}
