import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SLENDER_WIDE_TAILED_ARROW = {
  _style: {
    entity:
      'shape=mxgraph.arrows.slender_wide_tailed_arrow;html=1;verticalLabelPosition=bottom;verticalAlign=top;strokeWidth=2;strokeColor=#000000;',
  },
  _width: 96,
  _height: 60,
}

export function SlenderWideTailedArrow(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, SLENDER_WIDE_TAILED_ARROW)} />
  )
}
