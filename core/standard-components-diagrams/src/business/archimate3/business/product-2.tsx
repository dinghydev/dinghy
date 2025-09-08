import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PRODUCT_2 = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#ffff99;shape=mxgraph.archimate3.product;',
  },
  _original_width: 70,
  _original_height: 40,
}

export function Product2(props: DiagramNodeProps) {
  return (
    <Shape {...PRODUCT_2} {...props} _style={extendStyle(PRODUCT_2, props)} />
  )
}
