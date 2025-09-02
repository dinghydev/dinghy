import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BRAIN = {
  _style: {
    entity:
      'shape=mxgraph.signs.healthcare.brain;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 98,
  _original_height: 85,
}

export function Brain(props: DiagramNodeProps) {
  return <Shape {...BRAIN} {...props} _style={extendStyle(BRAIN, props)} />
}
