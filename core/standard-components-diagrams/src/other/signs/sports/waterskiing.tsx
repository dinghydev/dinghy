import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const WATERSKIING = {
  _style:
    'shape=mxgraph.signs.sports.waterskiing;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 99,
  _height: 98,
}

export function Waterskiing(props: DiagramNodeProps) {
  return (
    <Shape
      {...WATERSKIING}
      {...props}
      _style={extendStyle(WATERSKIING, props)}
    />
  )
}
