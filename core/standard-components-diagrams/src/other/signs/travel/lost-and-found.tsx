import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LOST_AND_FOUND = {
  _style:
    'shape=mxgraph.signs.travel.lost_and_found;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 99,
  _height: 95,
}

export function LostAndFound(props: DiagramNodeProps) {
  return (
    <Shape
      {...LOST_AND_FOUND}
      {...props}
      _style={extendStyle(LOST_AND_FOUND, props)}
    />
  )
}
