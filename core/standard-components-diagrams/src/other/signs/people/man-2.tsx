import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MAN_2 = {
  _style: {
    entity:
      'shape=mxgraph.signs.people.man_2;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 36,
  _original_height: 99,
}

export function Man2(props: DiagramNodeProps) {
  return <Shape {...MAN_2} {...props} _style={extendStyle(MAN_2, props)} />
}
