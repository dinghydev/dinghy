import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const EXPRESSROUTE_CIRCUITS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/networking/ExpressRoute_Circuits.svg;strokeColor=none;',
  },
  _original_width: 70,
  _original_height: 64,
}

export function ExpressrouteCircuits(props: DiagramNodeProps) {
  return (
    <Shape
      {...EXPRESSROUTE_CIRCUITS}
      {...props}
      _style={extendStyle(EXPRESSROUTE_CIRCUITS, props)}
    />
  )
}
