import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DIVING = {
  _style:
    'shape=mxgraph.signs.sports.diving;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 94,
  _height: 99,
}

export function Diving(props: DiagramNodeProps) {
  return <Shape {...DIVING} {...props} _style={extendStyle(DIVING, props)} />
}
