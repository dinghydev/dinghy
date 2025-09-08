import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const BOUNDARY_OBJECT = {
  _style: {
    entity: 'shape=umlBoundary;whiteSpace=wrap;html=1;',
  },
  _original_width: 100,
  _original_height: 80,
}

export function BoundaryObject(props: DiagramNodeProps) {
  return (
    <Shape
      {...BOUNDARY_OBJECT}
      {...props}
      _style={extendStyle(BOUNDARY_OBJECT, props)}
    />
  )
}
