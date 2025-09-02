import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PRIVATE_MOBILE_NETWORK = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Private_Mobile_Network.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 48,
}

export function PrivateMobileNetwork(props: DiagramNodeProps) {
  return (
    <Shape
      {...PRIVATE_MOBILE_NETWORK}
      {...props}
      _style={extendStyle(PRIVATE_MOBILE_NETWORK, props)}
    />
  )
}
