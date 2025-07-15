import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PRODUCT = {
  _style:
    'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#ffff99;shape=mxgraph.archimate.product;overflow=fill',
  _width: 100,
  _height: 75,
}

export function Product(props: DiagramNodeProps) {
  return <Shape {...PRODUCT} {...props} />
}
