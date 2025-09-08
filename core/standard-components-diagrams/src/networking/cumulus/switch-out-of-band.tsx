import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SWITCH_OUT_OF_BAND = {
  _style: {
    entity:
      'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;fontSize=12;verticalAlign=top;fontColor=#364149;shadow=0;dashed=0;image=img/lib/cumulus/switch_out_of_band.svg;strokeColor=none;',
  },
  _original_width: 96,
  _original_height: 24,
}

export function SwitchOutOfBand(props: DiagramNodeProps) {
  return (
    <Shape
      {...SWITCH_OUT_OF_BAND}
      {...props}
      _style={extendStyle(SWITCH_OUT_OF_BAND, props)}
    />
  )
}
