import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DOWNHILL_SKIING_1 = {
  _style:
    'shape=mxgraph.signs.sports.downhill_skiing_1;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 99,
  _height: 97,
}

export function DownhillSkiing1(props: DiagramNodeProps) {
  return (
    <Shape
      {...DOWNHILL_SKIING_1}
      {...props}
      _style={extendStyle(DOWNHILL_SKIING_1, props)}
    />
  )
}
