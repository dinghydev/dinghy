import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const WOMAN_2 = {
  _style: {
    entity:
      'shape=mxgraph.signs.people.woman_2;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 45,
  _original_height: 99,
}

export function Woman2(props: DiagramNodeProps) {
  return <Shape {...WOMAN_2} {...props} _style={extendStyle(WOMAN_2, props)} />
}
