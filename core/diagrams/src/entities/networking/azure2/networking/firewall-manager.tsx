import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const FIREWALL_MANAGER = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/networking/Azure_Firewall_Manager.svg;strokeColor=none;',
  },
  _original_width: 70,
  _original_height: 60,
}

export function FirewallManager(props: NodeProps) {
  return (
    <Shape
      {...FIREWALL_MANAGER}
      {...props}
      _style={extendStyle(FIREWALL_MANAGER, props)}
    />
  )
}
