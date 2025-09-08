import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PHOTO_RESISTOR = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.opto_electronics.photo_resistor_1;',
  },
  _original_width: 100,
  _original_height: 90,
}

export function PhotoResistor(props: DiagramNodeProps) {
  return (
    <Shape
      {...PHOTO_RESISTOR}
      {...props}
      _style={extendStyle(PHOTO_RESISTOR, props)}
    />
  )
}
