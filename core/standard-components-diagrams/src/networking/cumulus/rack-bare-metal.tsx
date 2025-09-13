import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const RACK_BARE_METAL = {
  _style: {
    entity:
      'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;fontSize=12;verticalAlign=top;fontColor=#364149;shadow=0;dashed=0;image=img/lib/cumulus/rack_bare_metal.svg;strokeColor=none;',
  },
  _width: 96,
  _height: 114,
}

export function RackBareMetal(props: DiagramNodeProps) {
  return (
    <Shape
      {...RACK_BARE_METAL}
      {...props}
      _style={extendStyle(RACK_BARE_METAL, props)}
    />
  )
}
