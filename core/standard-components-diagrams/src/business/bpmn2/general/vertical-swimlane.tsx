import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const VERTICAL_SWIMLANE = {
  _style: {
    entity: 'swimlane;startSize=20;whiteSpace=wrap;html=1;',
  },
  _original_width: 120,
  _original_height: 320,
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
