import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const WOMAN_1 = {
  _style: {
    entity:
      'shape=mxgraph.signs.people.woman_1;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 48,
  _original_height: 100,
}

export function Woman1(props: DiagramNodeProps) {
  return <Shape {...WOMAN_1} {...props} _style={extendStyle(WOMAN_1, props)} />
}
