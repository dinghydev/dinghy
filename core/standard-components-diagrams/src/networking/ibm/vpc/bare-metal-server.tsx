import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BARE_METAL_SERVER = {
  _style: {
    entity:
      'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;fontColor=#4277BB;labelBackgroundColor=default;fontSize=12;spacingTop=3;image=img/lib/ibm/vpc/BareMetalServer.svg;strokeColor=none;',
  },
  _width: 60,
  _height: 60,
}

export function BareMetalServer(props: DiagramNodeProps) {
  return (
    <Shape
      {...BARE_METAL_SERVER}
      {...props}
      _style={extendStyle(BARE_METAL_SERVER, props)}
    />
  )
}
