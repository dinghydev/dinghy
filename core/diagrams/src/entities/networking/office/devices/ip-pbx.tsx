import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const IP_PBX = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.devices.ip_pbx;',
  },
  _width: 59,
  _height: 39,
}

export function IpPbx(props: DiagramNodeProps) {
  return <Shape {...IP_PBX} {...props} _style={extendStyle(IP_PBX, props)} />
}
