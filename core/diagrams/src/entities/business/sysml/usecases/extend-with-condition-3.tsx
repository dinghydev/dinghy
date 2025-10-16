import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const EXTEND_WITH_CONDITION_3 = {
  _style: {
    entity:
      'edgeStyle=none;html=1;endArrow=none;rounded=0;labelBackgroundColor=none;dashed=1;exitX=0.5;exitY=1;',
  },
  _width: 2,
  _height: 80,
}

export function ExtendWithCondition3(props: DiagramNodeProps) {
  return (
    <Shape
      {...EXTEND_WITH_CONDITION_3}
      {...props}
      _style={extendStyle(EXTEND_WITH_CONDITION_3, props)}
    />
  )
}
