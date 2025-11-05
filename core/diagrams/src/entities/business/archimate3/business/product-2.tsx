import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PRODUCT_2 = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#ffff99;shape=mxgraph.archimate3.product;',
  },
  _width: 70,
  _height: 40,
}

export function Product2(props: NodeProps) {
  return (
    <Shape {...PRODUCT_2} {...props} _style={extendStyle(PRODUCT_2, props)} />
  )
}
