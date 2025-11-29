import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const POTENTIOMETER_2 = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.resistors.potentiometer_2;',
  },
  _width: 100,
  _height: 40,
}

export function Potentiometer2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, POTENTIOMETER_2)} />
}
