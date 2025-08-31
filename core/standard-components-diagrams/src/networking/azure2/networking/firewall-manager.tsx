import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FIREWALL_MANAGER = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/networking/Azure_Firewall_Manager.svg;strokeColor=none;',
  _width: 70,
  _height: 60,
}

export function FirewallManager(props: DiagramNodeProps) {
  return (
    <Shape
      {...FIREWALL_MANAGER}
      {...props}
      _style={extendStyle(FIREWALL_MANAGER, props)}
    />
  )
}
