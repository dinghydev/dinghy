import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const RACK_OUT_OF_BAND = {
  _style:
    'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;fontSize=12;verticalAlign=top;fontColor=#364149;shadow=0;dashed=0;image=img/lib/cumulus/rack_out_of_band.svg;',
  _width: 96,
  _height: 114,
}

export function RackOutOfBand(props: DiagramNodeProps) {
  return <Shape {...RACK_OUT_OF_BAND} {...props} />
}
