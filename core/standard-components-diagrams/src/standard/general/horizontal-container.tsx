import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const HORIZONTAL_CONTAINER = {
  _style: {
    entity: 'swimlane;horizontal=0;whiteSpace=wrap;html=1;',
  },
  _original_width: 200,
  _original_height: 200,
}

export function HorizontalContainer(props: DiagramNodeProps) {
  return (
    <Shape
      {...HORIZONTAL_CONTAINER}
      {...props}
      _style={extendStyle(HORIZONTAL_CONTAINER, props)}
    />
  )
}
