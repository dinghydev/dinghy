import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const EXPRESSROUTE_DIRECT = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/ExpressRoute_Direct.svg;',
  _width: 68,
  _height: 60,
}

export function ExpressrouteDirect(props: DiagramNodeProps) {
  return <Shape {...EXPRESSROUTE_DIRECT} {...props} />
}
