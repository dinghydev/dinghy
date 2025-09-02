import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SEQUENCED_PULL_BALL = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;strokeWidth=2;shape=mxgraph.lean_mapping.sequenced_pull_ball;',
  },
  _original_width: 60,
  _original_height: 60,
}

export function SequencedPullBall(props: DiagramNodeProps) {
  return (
    <Shape
      {...SEQUENCED_PULL_BALL}
      {...props}
      _style={extendStyle(SEQUENCED_PULL_BALL, props)}
    />
  )
}
