import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const IP_TV = {
  _style:
    'image;points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;image=img/lib/allied_telesis/computer_and_terminals/IP_TV.svg;strokeColor=none;',
  _width: 49.199999999999996,
  _height: 50.4,
}

export function IpTv(props: DiagramNodeProps) {
  return <Shape {...IP_TV} {...props} _style={extendStyle(IP_TV, props)} />
}
