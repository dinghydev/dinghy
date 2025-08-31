import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LIFE_JACKET = {
  _style: {
    entity:
      'shape=mxgraph.signs.sports.life_jacket;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 100,
  _height: 99,
}

export function LifeJacket(props: DiagramNodeProps) {
  return (
    <Shape
      {...LIFE_JACKET}
      {...props}
      _style={extendStyle(LIFE_JACKET, props)}
    />
  )
}
