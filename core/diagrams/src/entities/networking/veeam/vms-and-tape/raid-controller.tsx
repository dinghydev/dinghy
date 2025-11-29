import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const RAID_CONTROLLER = {
  _style: {
    entity:
      'pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.raid_controller;',
  },
  _width: 42,
  _height: 29.2,
}

export function RaidController(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, RAID_CONTROLLER)} />
}
