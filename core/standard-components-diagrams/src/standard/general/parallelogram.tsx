import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PARALLELOGRAM = {
  _style: {
    entity:
      'shape=parallelogram;perimeter=parallelogramPerimeter;whiteSpace=wrap;html=1;fixedSize=1;',
  },
  _original_width: 120,
  _original_height: 60,
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
