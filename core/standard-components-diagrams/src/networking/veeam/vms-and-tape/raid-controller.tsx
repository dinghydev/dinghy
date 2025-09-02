import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const RAID_CONTROLLER = {
  _style: {
    entity:
      'pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.raid_controller;',
  },
  _original_width: 42,
  _original_height: 29.2,
}

export function RaidController(props: DiagramNodeProps) {
  return (
    <Shape
      {...RAID_CONTROLLER}
      {...props}
      _style={extendStyle(RAID_CONTROLLER, props)}
    />
  )
}
