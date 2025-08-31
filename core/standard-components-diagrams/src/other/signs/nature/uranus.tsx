import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const URANUS = {
  _style:
    'shape=mxgraph.signs.nature.uranus;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 64,
  _height: 99,
}

export function Uranus(props: DiagramNodeProps) {
  return <Shape {...URANUS} {...props} _style={extendStyle(URANUS, props)} />
}
