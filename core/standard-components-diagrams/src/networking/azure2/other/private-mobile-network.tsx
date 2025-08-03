import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PRIVATE_MOBILE_NETWORK = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Private_Mobile_Network.svg;strokeColor=none;',
  _width: 68,
  _height: 48,
}

export function PrivateMobileNetwork(props: DiagramNodeProps) {
  return <Shape {...PRIVATE_MOBILE_NETWORK} {...props} />
}
