import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const IP_PHONE = {
  _style:
    'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.ip_phone;',
  _width: 76.5,
  _height: 37,
}

export function IpPhone(props: DiagramNodeProps) {
  return <Shape {...IP_PHONE} {...props} />
}
