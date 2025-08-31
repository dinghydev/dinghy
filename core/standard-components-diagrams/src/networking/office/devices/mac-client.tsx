import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MAC_CLIENT = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.devices.mac_client;',
  _width: 58,
  _height: 48,
}

export function MacClient(props: DiagramNodeProps) {
  return (
    <Shape {...MAC_CLIENT} {...props} _style={extendStyle(MAC_CLIENT, props)} />
  )
}
