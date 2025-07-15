import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const EXPRESSROUTE_CIRCUITS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/networking/ExpressRoute_Circuits.svg;',
  _width: 70,
  _height: 64,
}

export function ExpressrouteCircuits(props: DiagramNodeProps) {
  return <Shape {...EXPRESSROUTE_CIRCUITS} {...props} />
}
