import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const IP_PHONE = {
  _style: {
    entity:
      'shape=mxgraph.cisco.modems_and_phones.ip_phone;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _width: 90,
  _height: 50,
}

export function IpPhone(props: DiagramNodeProps) {
  return (
    <Shape {...IP_PHONE} {...props} _style={extendStyle(IP_PHONE, props)} />
  )
}
