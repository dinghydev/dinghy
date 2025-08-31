import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PEERING_SERVICE = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Peering_Service.svg;strokeColor=none;',
  _width: 68,
  _height: 69,
}

export function PeeringService(props: DiagramNodeProps) {
  return (
    <Shape
      {...PEERING_SERVICE}
      {...props}
      _style={extendStyle(PEERING_SERVICE, props)}
    />
  )
}
