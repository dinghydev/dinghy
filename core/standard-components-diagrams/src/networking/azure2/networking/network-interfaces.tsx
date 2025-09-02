import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const NETWORK_INTERFACES = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/networking/Network_Interfaces.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 60,
}

export function NetworkInterfaces(props: DiagramNodeProps) {
  return (
    <Shape
      {...NETWORK_INTERFACES}
      {...props}
      _style={extendStyle(NETWORK_INTERFACES, props)}
    />
  )
}
