import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VIEW = {
  _style:
    'shape=mxgraph.signs.sports.view;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 87,
  _height: 98,
}

export function View(props: DiagramNodeProps) {
  return <Shape {...VIEW} {...props} _style={extendStyle(VIEW, props)} />
}
