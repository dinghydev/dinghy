import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SELF_GUIDING_TRAIL = {
  _style: {
    entity:
      'shape=mxgraph.signs.sports.self_guiding_trail;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 99,
  _original_height: 99,
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
