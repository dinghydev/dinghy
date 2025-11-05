import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const IP_PHONE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.ip_phone;',
  },
  _width: 76.5,
  _height: 37,
}

export function IpPhone(props: NodeProps) {
  return (
    <Shape {...IP_PHONE} {...props} _style={extendStyle(IP_PHONE, props)} />
  )
}
