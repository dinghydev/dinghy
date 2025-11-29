import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PHOTO_RESISTOR_2 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.opto_electronics.photo_resistor_2;pointerEvents=1;',
  },
  _width: 100,
  _height: 50,
}

export function PhotoResistor2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, PHOTO_RESISTOR_2)} />
}
