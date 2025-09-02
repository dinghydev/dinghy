import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TRAPEZOID = {
  _style: {
    entity:
      'shape=trapezoid;perimeter=trapezoidPerimeter;whiteSpace=wrap;html=1;fixedSize=1;',
  },
  _original_width: 120,
  _original_height: 60,
}

export function Trapezoid(props: DiagramNodeProps) {
  return (
    <Shape {...TRAPEZOID} {...props} _style={extendStyle(TRAPEZOID, props)} />
  )
}
