import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TDD = {
  _style: {
    entity:
      'shape=mxgraph.signs.healthcare.tdd;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 84,
  _original_height: 98,
}

export function Tdd(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, TDD)} />
}
