import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PRODUCT_RESULT = {
  _style:
    'shape=parallelogram;perimeter=parallelogramPerimeter;whiteSpace=wrap;html=1;dashed=0;',
  _width: 100,
  _height: 50,
}

export function ProductResult(props: DiagramNodeProps) {
  return <Shape {...PRODUCT_RESULT} {...props} />
}
