import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const NAT = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/networking/NAT.svg;strokeColor=none;',
  _width: 60,
  _height: 60,
}

export function Nat(props: DiagramNodeProps) {
  return <Shape {...NAT} {...props} _style={extendStyle(NAT, props)} />
}
