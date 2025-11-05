import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const EXPRESSROUTE_DIRECT = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/ExpressRoute_Direct.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 60,
}

export function ExpressrouteDirect(props: NodeProps) {
  return (
    <Shape
      {...EXPRESSROUTE_DIRECT}
      {...props}
      _style={extendStyle(EXPRESSROUTE_DIRECT, props)}
    />
  )
}
