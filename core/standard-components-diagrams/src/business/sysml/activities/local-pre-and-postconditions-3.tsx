import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const LOCAL_PRE_AND_POSTCONDITIONS_3 = {
  _style:
    'edgeStyle=elbowEdgeStyle;html=1;elbow=horizontal;rounded=0;endArrow=none;',
  _width: 3,
  _height: 180,
}

export function LocalPreAndPostconditions3(props: DiagramNodeProps) {
  return <Shape {...LOCAL_PRE_AND_POSTCONDITIONS_3} {...props} />
}
