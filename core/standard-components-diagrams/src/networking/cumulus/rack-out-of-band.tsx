import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const RACK_OUT_OF_BAND = {
  _style: {
    entity:
      'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;fontSize=12;verticalAlign=top;fontColor=#364149;shadow=0;dashed=0;image=img/lib/cumulus/rack_out_of_band.svg;strokeColor=none;',
  },
  _original_width: 96,
  _original_height: 114,
}

export function RackOutOfBand(props: DiagramNodeProps) {
  return (
    <Shape
      {...RACK_OUT_OF_BAND}
      {...props}
      _style={extendStyle(RACK_OUT_OF_BAND, props)}
    />
  )
}
