import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const HORIZONTAL_CONTAINER = {
  _style: {
    entity: 'swimlane;horizontal=0;whiteSpace=wrap;html=1;',
  },
  _width: 200,
  _height: 200,
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
