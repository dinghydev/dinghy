import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const EXTEND_WITH_CONDITION_2 = {
  _style:
    'align=right;html=1;verticalAlign=bottom;rounded=0;labelBackgroundColor=none;endArrow=open;endSize=12;dashed=1;',
  _width: 1,
  _height: 80,
}

export function ExtendWithCondition2(props: DiagramNodeProps) {
  return <Shape {...EXTEND_WITH_CONDITION_2} {...props} />
}
