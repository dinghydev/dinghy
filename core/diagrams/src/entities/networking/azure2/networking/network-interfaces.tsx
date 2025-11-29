import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const NETWORK_INTERFACES = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/networking/Network_Interfaces.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 60,
}

export function NetworkInterfaces(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, NETWORK_INTERFACES)} />
}
