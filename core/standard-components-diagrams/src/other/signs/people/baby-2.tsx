import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BABY_2 = {
  _style: {
    entity:
      'shape=mxgraph.signs.people.baby_2;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 77,
  _original_height: 99,
}

export function Baby2(props: DiagramNodeProps) {
  return <Shape {...BABY_2} {...props} _style={extendStyle(BABY_2, props)} />
}
