import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const FIREWALL_POLICY = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/networking/Azure_Firewall_Policy.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 49.32,
}

export function FirewallPolicy(props: DiagramNodeProps) {
  return (
    <Shape
      {...FIREWALL_POLICY}
      {...props}
      _style={extendStyle(FIREWALL_POLICY, props)}
    />
  )
}
