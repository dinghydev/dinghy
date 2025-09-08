import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const NAT = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/networking/NAT.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
}

export function Nat(props: DiagramNodeProps) {
  return <Shape {...NAT} {...props} _style={extendStyle(NAT, props)} />
}
