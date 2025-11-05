import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const WORKSTATION = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.devices.workstation;',
  },
  _original_width: 53,
  _original_height: 56,
}

export function Workstation(props: NodeProps) {
  return (
    <Shape
      {...WORKSTATION}
      {...props}
      _style={extendStyle(WORKSTATION, props)}
    />
  )
}
