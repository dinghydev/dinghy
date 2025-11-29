import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DEAF = {
  _style: {
    entity:
      'shape=mxgraph.signs.healthcare.deaf;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 79,
  _original_height: 98,
}

export function Deaf(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, DEAF)} />
}
