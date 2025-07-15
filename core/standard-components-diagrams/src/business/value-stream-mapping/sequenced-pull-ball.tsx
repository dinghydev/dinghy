import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SEQUENCED_PULL_BALL = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;strokeWidth=2;shape=mxgraph.lean_mapping.sequenced_pull_ball;',
  _width: 60,
  _height: 60,
}

export function SequencedPullBall(props: DiagramNodeProps) {
  return <Shape {...SEQUENCED_PULL_BALL} {...props} />
}
