import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PARTICIPANT_INITIATING_BOTTOM_WITH_DECORATOR = {
  _style: {
    entity:
      'edgeStyle=orthogonalEdgeStyle;html=1;elbow=horizontal;endArrow=none;labelBackgroundColor=none;endSize=12;endFill=0;dashed=1;dashPattern=1 2;exitX=0.5;exitY=1;rounded=0;',
  },
  _width: 2,
  _height: 80,
}

export function ParticipantInitiatingBottomWithDecorator(
  props: DiagramNodeProps,
) {
  return (
    <Shape
      {...PARTICIPANT_INITIATING_BOTTOM_WITH_DECORATOR}
      {...props}
      _style={extendStyle(PARTICIPANT_INITIATING_BOTTOM_WITH_DECORATOR, props)}
    />
  )
}
