import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const NIC = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.devices.nic;',
  },
  _width: 57,
  _height: 38,
}

export function Nic(props: NodeProps) {
  return <Shape {...NIC} {...props} _style={extendStyle(NIC, props)} />
}
