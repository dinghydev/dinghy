import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const NETWORK_MANAGER = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Azure_Network_Manager.svg;strokeColor=none;',
  },
  _original_width: 64,
  _original_height: 68,
}

export function NetworkManager(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, NETWORK_MANAGER)} />
}
