import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const COMMUNICATION_SERVICES = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Azure_Communication_Services.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 50,
}

export function CommunicationServices(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, COMMUNICATION_SERVICES)} />
  )
}
