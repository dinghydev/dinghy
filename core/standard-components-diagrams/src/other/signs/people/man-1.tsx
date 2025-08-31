import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MAN_1 = {
  _style: {
    entity:
      'shape=mxgraph.signs.people.man_1;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 37,
  _height: 98,
}

export function Man1(props: DiagramNodeProps) {
  return <Shape {...MAN_1} {...props} _style={extendStyle(MAN_1, props)} />
}
