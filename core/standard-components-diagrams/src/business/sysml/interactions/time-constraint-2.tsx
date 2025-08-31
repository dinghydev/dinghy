import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TIME_CONSTRAINT_2 = {
  _style:
    'edgeStyle=none;html=1;endArrow=none;align=left;labelBackgroundColor=none;',
  _width: 5,
  _height: 200,
}

export function TimeConstraint2(props: DiagramNodeProps) {
  return (
    <Shape
      {...TIME_CONSTRAINT_2}
      {...props}
      _style={extendStyle(TIME_CONSTRAINT_2, props)}
    />
  )
}
