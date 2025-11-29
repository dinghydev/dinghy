import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PHOTO_RESISTOR = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.opto_electronics.photo_resistor_1;',
  },
  _original_width: 100,
  _original_height: 90,
}

export function PhotoResistor(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, PHOTO_RESISTOR)} />
}
