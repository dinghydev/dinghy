import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ARROW_NW = {
  _style: {
    entity:
      'shape=mxgraph.signs.travel.arrow_nw;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 98,
  _original_height: 98,
}

export function ArrowNw(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, ARROW_NW)} />
}
