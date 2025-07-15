import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const EXTEND_WITH_CONDITION_3 = {
  _style:
    'edgeStyle=none;html=1;endArrow=none;rounded=0;labelBackgroundColor=none;dashed=1;exitX=0.5;exitY=1;',
  _width: 2,
  _height: 80,
}

export function ExtendWithCondition3(props: DiagramNodeProps) {
  return <Shape {...EXTEND_WITH_CONDITION_3} {...props} />
}
