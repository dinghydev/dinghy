import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const IP_PBX = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.devices.ip_pbx;',
  },
  _original_width: 59,
  _original_height: 39,
}

export function IpPbx(props: DiagramNodeProps) {
  return <Shape {...IP_PBX} {...props} _style={extendStyle(IP_PBX, props)} />
}
