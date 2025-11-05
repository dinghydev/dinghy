import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ARROW_NE = {
  _style: {
    entity:
      'shape=mxgraph.signs.travel.arrow_ne;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 99,
  _original_height: 98,
}

export function ArrowNe(props: NodeProps) {
  return (
    <Shape {...ARROW_NE} {...props} _style={extendStyle(ARROW_NE, props)} />
  )
}
