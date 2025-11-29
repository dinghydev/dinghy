import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BENT_LEFT_ARROW = {
  _style: {
    entity:
      'shape=mxgraph.arrows.bent_left_arrow;html=1;verticalLabelPosition=bottom;verticalAlign=top;strokeWidth=2;strokeColor=#000000;',
  },
  _original_width: 97,
  _original_height: 97,
}

export function BentLeftArrow(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, BENT_LEFT_ARROW)} />
}
