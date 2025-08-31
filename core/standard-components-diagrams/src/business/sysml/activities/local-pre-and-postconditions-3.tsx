import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LOCAL_PRE_AND_POSTCONDITIONS_3 = {
  _style: {
    entity:
      'edgeStyle=elbowEdgeStyle;html=1;elbow=horizontal;rounded=0;endArrow=none;',
  },
  _width: 3,
  _height: 180,
}

export function LocalPreAndPostconditions3(props: DiagramNodeProps) {
  return (
    <Shape
      {...LOCAL_PRE_AND_POSTCONDITIONS_3}
      {...props}
      _style={extendStyle(LOCAL_PRE_AND_POSTCONDITIONS_3, props)}
    />
  )
}
