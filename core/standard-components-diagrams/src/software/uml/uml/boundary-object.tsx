import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BOUNDARY_OBJECT = {
  _style: 'shape=umlBoundary;whiteSpace=wrap;html=1;',
  _width: 100,
  _height: 80,
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
