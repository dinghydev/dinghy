import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const OUTPUT_2 = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.plc_ladder.output_2;',
  },
  _width: 50,
  _height: 25,
}

export function Output2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, OUTPUT_2)} />
}
