import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CARDIOLOGY = {
  _style: {
    entity:
      'shape=mxgraph.signs.healthcare.cardiology;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 98,
  _original_height: 97,
}

export function Cardiology(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, CARDIOLOGY)} />
}
