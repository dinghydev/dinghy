import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const USE_CASE = {
  _style: {
    entity:
      'shape=ellipse;html=1;strokeWidth=3;fontStyle=1;whiteSpace=wrap;align=center;perimeter=ellipsePerimeter;',
  },
  _original_width: 120,
  _original_height: 60,
}

export function UseCase(props: DiagramNodeProps) {
  return (
    <Shape {...USE_CASE} {...props} _style={extendStyle(USE_CASE, props)} />
  )
}
