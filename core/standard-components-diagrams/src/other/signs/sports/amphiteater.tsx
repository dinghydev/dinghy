import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const AMPHITEATER = {
  _style:
    'shape=mxgraph.signs.sports.amphiteater;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 95,
  _height: 99,
}

export function Amphiteater(props: DiagramNodeProps) {
  return (
    <Shape
      {...AMPHITEATER}
      {...props}
      _style={extendStyle(AMPHITEATER, props)}
    />
  )
}
