import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DEAF = {
  _style:
    'shape=mxgraph.signs.healthcare.deaf;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 79,
  _height: 98,
}

export function Deaf(props: DiagramNodeProps) {
  return <Shape {...DEAF} {...props} _style={extendStyle(DEAF, props)} />
}
