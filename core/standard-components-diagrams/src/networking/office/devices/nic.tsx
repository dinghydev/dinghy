import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const NIC = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.devices.nic;',
  },
  _width: 57,
  _height: 38,
}

export function Nic(props: DiagramNodeProps) {
  return <Shape {...NIC} {...props} _style={extendStyle(NIC, props)} />
}
