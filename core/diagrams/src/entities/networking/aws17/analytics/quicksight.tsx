import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const QUICKSIGHT = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.quicksight;fillColor=#00B7F4;gradientColor=none;',
  },
  _original_width: 60,
  _original_height: 60,
}

export function Quicksight(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, QUICKSIGHT)} />
}
