import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SATURN = {
  _style: {
    entity:
      'shape=mxgraph.signs.nature.saturn;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 60,
  _original_height: 99,
}

export function Saturn(props: DiagramNodeProps) {
  return <Shape {...SATURN} {...props} _style={extendStyle(SATURN, props)} />
}
