import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const REFERENCE = {
  _style:
    'shape=ellipse;html=1;dashed=0;whiteSpace=wrap;aspect=fixed;perimeter=ellipsePerimeter;',
  _width: 30,
  _height: 30,
}

export function Reference(props: DiagramNodeProps) {
  return (
    <Shape {...REFERENCE} {...props} _style={extendStyle(REFERENCE, props)} />
  )
}
