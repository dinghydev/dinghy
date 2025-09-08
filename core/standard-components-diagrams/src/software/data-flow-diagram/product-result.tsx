import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PRODUCT_RESULT = {
  _style: {
    entity:
      'shape=parallelogram;perimeter=parallelogramPerimeter;whiteSpace=wrap;html=1;dashed=0;',
  },
  _original_width: 100,
  _original_height: 50,
}

export function ProductResult(props: DiagramNodeProps) {
  return (
    <Shape
      {...PRODUCT_RESULT}
      {...props}
      _style={extendStyle(PRODUCT_RESULT, props)}
    />
  )
}
