import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const HEART_2 = {
  _style:
    'shape=mxgraph.signs.healthcare.heart_2;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 98,
  _height: 93,
}

export function Heart2(props: DiagramNodeProps) {
  return <Shape {...HEART_2} {...props} _style={extendStyle(HEART_2, props)} />
}
