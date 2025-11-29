import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const POTENTIOMETER_TRIMMER_2 = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.resistors.trimmer_pot_2;',
  },
  _width: 100,
  _height: 40,
}

export function PotentiometerTrimmer2(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, POTENTIOMETER_TRIMMER_2)} />
  )
}
