import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const HORIZONTAL_SWIMLANE = {
  _style: {
    entity: 'swimlane;startSize=20;horizontal=0;html=1;whiteSpace=wrap;',
  },
  _width: 320,
  _height: 120,
}

export function HorizontalSwimlane(props: DiagramNodeProps) {
  return (
    <Shape
      {...HORIZONTAL_SWIMLANE}
      {...props}
      _style={extendStyle(HORIZONTAL_SWIMLANE, props)}
    />
  )
}
