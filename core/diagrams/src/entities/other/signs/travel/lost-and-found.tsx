import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const LOST_AND_FOUND = {
  _style: {
    entity:
      'shape=mxgraph.signs.travel.lost_and_found;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 99,
  _original_height: 95,
}

export function LostAndFound(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, LOST_AND_FOUND)} />
}
