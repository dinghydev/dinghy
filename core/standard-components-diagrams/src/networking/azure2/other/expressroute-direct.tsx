import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const EXPRESSROUTE_DIRECT = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/ExpressRoute_Direct.svg;strokeColor=none;',
  },
  _width: 68,
  _height: 60,
}

export function ExpressrouteDirect(props: DiagramNodeProps) {
  return (
    <Shape
      {...EXPRESSROUTE_DIRECT}
      {...props}
      _style={extendStyle(EXPRESSROUTE_DIRECT, props)}
    />
  )
}
