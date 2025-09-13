import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PARTICIPANT_INITIATING_TOP_WITH_DECORATOR_3 = {
  _style: {
    entity:
      'edgeStyle=orthogonalEdgeStyle;html=1;elbow=horizontal;endArrow=none;labelBackgroundColor=none;endSize=12;endFill=0;dashed=1;dashPattern=1 2;exitX=0.5;exitY=0;rounded=0;',
  },
  _width: 2,
  _height: 80,
}

export function ParticipantInitiatingTopWithDecorator3(
  props: DiagramNodeProps,
) {
  return (
    <Shape
      {...PARTICIPANT_INITIATING_TOP_WITH_DECORATOR_3}
      {...props}
      _style={extendStyle(PARTICIPANT_INITIATING_TOP_WITH_DECORATOR_3, props)}
    />
  )
}
