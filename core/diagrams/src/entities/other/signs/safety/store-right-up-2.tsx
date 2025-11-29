import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const STORE_RIGHT_UP_2 = {
  _style: {
    entity:
      'shape=mxgraph.signs.safety.store_right_up_2;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 98,
  _original_height: 98,
}

export function StoreRightUp2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, STORE_RIGHT_UP_2)} />
}
