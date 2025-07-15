import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SELF_GUIDING_TRAIL = {
  _style:
    'shape=mxgraph.signs.sports.self_guiding_trail;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 99,
  _height: 99,
}

export function SelfGuidingTrail(props: DiagramNodeProps) {
  return <Shape {...SELF_GUIDING_TRAIL} {...props} />
}
