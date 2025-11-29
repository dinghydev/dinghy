import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const HEART_2 = {
  _style: {
    entity:
      'shape=mxgraph.signs.healthcare.heart_2;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 98,
  _original_height: 93,
}

export function Heart2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, HEART_2)} />
}
