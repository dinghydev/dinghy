import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PRIVATE_LINK_SERVICE = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/networking/Private_Link_Service.svg;strokeColor=none;',
  },
  _width: 69,
  _height: 40,
}

export function PrivateLinkService(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, PRIVATE_LINK_SERVICE)} />
}
