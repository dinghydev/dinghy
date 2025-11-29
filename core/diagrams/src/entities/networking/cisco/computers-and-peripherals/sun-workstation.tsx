import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SUN_WORKSTATION = {
  _style: {
    entity:
      'shape=mxgraph.cisco.computers_and_peripherals.sun_workstation;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 85,
  _original_height: 67,
}

export function SunWorkstation(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, SUN_WORKSTATION)} />
}
