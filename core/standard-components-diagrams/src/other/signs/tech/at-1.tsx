import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const AT_1 = {
  _style:
    'shape=mxgraph.signs.tech.at_1;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 98,
  _height: 99,
}

export function At1(props: DiagramNodeProps) {
  return <Shape {...AT_1} {...props} _style={extendStyle(AT_1, props)} />
}
