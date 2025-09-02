import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PHOTO_RESISTOR_3 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.opto_electronics.photo_resistor_3;',
  },
  _original_width: 100,
  _original_height: 90,
}

export function PhotoResistor3(props: DiagramNodeProps) {
  return (
    <Shape
      {...PHOTO_RESISTOR_3}
      {...props}
      _style={extendStyle(PHOTO_RESISTOR_3, props)}
    />
  )
}
