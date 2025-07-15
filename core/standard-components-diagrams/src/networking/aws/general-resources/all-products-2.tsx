import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ALL_PRODUCTS_2 = {
  _style:
    'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#232F3D;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.all_products;',
  _width: 78,
  _height: 78,
}

export function AllProducts2(props: DiagramNodeProps) {
  return <Shape {...ALL_PRODUCTS_2} {...props} />
}
