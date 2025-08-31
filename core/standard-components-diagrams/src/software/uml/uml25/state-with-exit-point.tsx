import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const STATE_WITH_EXIT_POINT = {
  _style:
    'shape=umlState;rounded=1;verticalAlign=middle;spacingTop=0;absoluteArcSize=1;arcSize=10;umlStateConnection=connPointRefExit;boundedLbl=1;whiteSpace=wrap;html=1;',
  _width: 0,
  _height: 60,
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
