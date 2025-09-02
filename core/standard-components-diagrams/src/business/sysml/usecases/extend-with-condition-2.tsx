import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const EXTEND_WITH_CONDITION_2 = {
  _style: {
    entity:
      'align=right;html=1;verticalAlign=bottom;rounded=0;labelBackgroundColor=none;endArrow=open;endSize=12;dashed=1;',
  },
  _original_width: 1,
  _original_height: 80,
}

export function ExtendWithCondition2(props: DiagramNodeProps) {
  return (
    <Shape
      {...EXTEND_WITH_CONDITION_2}
      {...props}
      _style={extendStyle(EXTEND_WITH_CONDITION_2, props)}
    />
  )
}
