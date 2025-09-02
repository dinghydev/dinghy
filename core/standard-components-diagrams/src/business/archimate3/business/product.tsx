import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PRODUCT = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#ffff99;shape=mxgraph.archimate3.application;appType=product;archiType=square;',
  },
  _original_width: 150,
  _original_height: 75,
}

export function Product(props: DiagramNodeProps) {
  return <Shape {...PRODUCT} {...props} _style={extendStyle(PRODUCT, props)} />
}
