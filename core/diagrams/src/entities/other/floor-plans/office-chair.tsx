import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const OFFICE_CHAIR = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.office_chair;',
  },
  _original_width: 40,
  _original_height: 43,
}

export function OfficeChair(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, OFFICE_CHAIR)} />
}
