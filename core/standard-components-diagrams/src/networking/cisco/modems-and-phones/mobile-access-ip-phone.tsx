import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MOBILE_ACCESS_IP_PHONE = {
  _style: {
    entity:
      'shape=mxgraph.cisco.modems_and_phones.mobile_access_ip_phone;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 90,
  _original_height: 80,
}

export function MobileAccessIpPhone(props: DiagramNodeProps) {
  return (
    <Shape
      {...MOBILE_ACCESS_IP_PHONE}
      {...props}
      _style={extendStyle(MOBILE_ACCESS_IP_PHONE, props)}
    />
  )
}
