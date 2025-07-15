import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const FIREWALL_POLICY = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/networking/Azure_Firewall_Policy.svg;',
  _width: 68,
  _height: 49.32,
}

export function FirewallPolicy(props: DiagramNodeProps) {
  return <Shape {...FIREWALL_POLICY} {...props} />
}
