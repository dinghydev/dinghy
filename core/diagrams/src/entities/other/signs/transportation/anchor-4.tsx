import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ANCHOR_4 = {
  _style: {
    entity:
      'shape=mxgraph.signs.transportation.anchor_4;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 98,
  _original_height: 98,
}

export function Anchor4(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, ANCHOR_4)} />
}
