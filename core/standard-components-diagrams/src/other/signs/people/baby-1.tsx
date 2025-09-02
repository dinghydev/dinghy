import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BABY_1 = {
  _style: {
    entity:
      'shape=mxgraph.signs.people.baby_1;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 76,
  _original_height: 102,
}

export function Baby1(props: DiagramNodeProps) {
  return <Shape {...BABY_1} {...props} _style={extendStyle(BABY_1, props)} />
}
