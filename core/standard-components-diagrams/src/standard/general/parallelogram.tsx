import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PARALLELOGRAM = {
  _style:
    'shape=parallelogram;perimeter=parallelogramPerimeter;whiteSpace=wrap;html=1;fixedSize=1;',
  _width: 120,
  _height: 60,
}

export function Parallelogram(props: DiagramNodeProps) {
  return (
    <Shape
      {...PARALLELOGRAM}
      {...props}
      _style={extendStyle(PARALLELOGRAM, props)}
    />
  )
}
