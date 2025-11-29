import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const WORKSTATION = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.workstation;',
  },
  _original_width: 50,
  _original_height: 40,
}

export function Workstation(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, WORKSTATION)} />
}
