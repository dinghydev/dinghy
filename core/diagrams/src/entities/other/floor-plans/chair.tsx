import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CHAIR = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.chair;',
  },
  _original_width: 41,
  _original_height: 52,
}

export function Chair(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, CHAIR)} />
}
