import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PRODUCT_2 = {
  _style:
    'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#ffff99;shape=mxgraph.archimate3.product;',
  _width: 70,
  _height: 40,
}

export function Product2(props: DiagramNodeProps) {
  return <Shape {...PRODUCT_2} {...props} />
}
