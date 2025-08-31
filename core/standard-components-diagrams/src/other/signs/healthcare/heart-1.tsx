import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const HEART_1 = {
  _style:
    'shape=mxgraph.signs.healthcare.heart_1;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 103,
  _height: 94,
}

export function Heart1(props: DiagramNodeProps) {
  return <Shape {...HEART_1} {...props} _style={extendStyle(HEART_1, props)} />
}
