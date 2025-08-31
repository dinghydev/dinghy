import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const HORSEBACK_TRAIL = {
  _style: {
    entity:
      'shape=mxgraph.signs.sports.horseback_trail;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 60,
  _height: 60,
}

export function HorsebackTrail(props: DiagramNodeProps) {
  return (
    <Shape
      {...HORSEBACK_TRAIL}
      {...props}
      _style={extendStyle(HORSEBACK_TRAIL, props)}
    />
  )
}
