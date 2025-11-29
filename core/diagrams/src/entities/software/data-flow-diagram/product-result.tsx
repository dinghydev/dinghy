import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PRODUCT_RESULT = {
  _style: {
    entity:
      'shape=parallelogram;perimeter=parallelogramPerimeter;whiteSpace=wrap;html=1;dashed=0;',
  },
  _width: 100,
  _height: 50,
}

export function ProductResult(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, PRODUCT_RESULT)} />
}
