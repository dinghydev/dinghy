import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const USE_CASE = {
  _style:
    'shape=ellipse;html=1;strokeWidth=3;fontStyle=1;whiteSpace=wrap;align=center;perimeter=ellipsePerimeter;',
  _width: 120,
  _height: 60,
}

export function UseCase(props: DiagramNodeProps) {
  return (
    <Shape {...USE_CASE} {...props} _style={extendStyle(USE_CASE, props)} />
  )
}
