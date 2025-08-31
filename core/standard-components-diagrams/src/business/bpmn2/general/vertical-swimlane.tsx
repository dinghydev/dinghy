import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VERTICAL_SWIMLANE = {
  _style: 'swimlane;startSize=20;whiteSpace=wrap;html=1;',
  _width: 120,
  _height: 320,
}

export function VerticalSwimlane(props: DiagramNodeProps) {
  return (
    <Shape
      {...VERTICAL_SWIMLANE}
      {...props}
      _style={extendStyle(VERTICAL_SWIMLANE, props)}
    />
  )
}
