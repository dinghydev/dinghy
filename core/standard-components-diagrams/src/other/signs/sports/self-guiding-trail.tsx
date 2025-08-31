import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SELF_GUIDING_TRAIL = {
  _style:
    'shape=mxgraph.signs.sports.self_guiding_trail;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 60,
  _height: 60,
}

export function SelfGuidingTrail(props: DiagramNodeProps) {
  return (
    <Shape
      {...SELF_GUIDING_TRAIL}
      {...props}
      _style={extendStyle(SELF_GUIDING_TRAIL, props)}
    />
  )
}
