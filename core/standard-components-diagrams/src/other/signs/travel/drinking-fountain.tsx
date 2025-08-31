import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DRINKING_FOUNTAIN = {
  _style:
    'shape=mxgraph.signs.travel.drinking_fountain;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 82,
  _height: 101,
}

export function DrinkingFountain(props: DiagramNodeProps) {
  return (
    <Shape
      {...DRINKING_FOUNTAIN}
      {...props}
      _style={extendStyle(DRINKING_FOUNTAIN, props)}
    />
  )
}
