import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const STATE_WITH_EXIT_POINT = {
  _style: {
    entity:
      'shape=umlState;rounded=1;verticalAlign=middle;spacingTop=0;absoluteArcSize=1;arcSize=10;umlStateConnection=connPointRefExit;boundedLbl=1;whiteSpace=wrap;html=1;',
  },
  _original_width: 0,
  _original_height: 60,
}

export function StateWithExitPoint(props: DiagramNodeProps) {
  return (
    <Shape
      {...STATE_WITH_EXIT_POINT}
      {...props}
      _style={extendStyle(STATE_WITH_EXIT_POINT, props)}
    />
  )
}
