import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BRAIN = {
  _style: {
    entity:
      'shape=mxgraph.signs.healthcare.brain;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 98,
  _original_height: 85,
}

export function Brain(props: NodeProps) {
  return <Shape {...BRAIN} {...props} _style={extendStyle(BRAIN, props)} />
}
