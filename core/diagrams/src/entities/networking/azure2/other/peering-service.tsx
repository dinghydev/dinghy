import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PEERING_SERVICE = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Peering_Service.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 69,
}

export function PeeringService(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, PEERING_SERVICE)} />
}
