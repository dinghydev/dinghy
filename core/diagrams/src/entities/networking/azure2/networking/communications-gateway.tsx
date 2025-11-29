import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const COMMUNICATIONS_GATEWAY = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/networking/Azure_Communications_Gateway.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
}

export function CommunicationsGateway(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, COMMUNICATIONS_GATEWAY)} />
  )
}
