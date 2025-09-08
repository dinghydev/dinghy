import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PRODUCT = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#ffff99;shape=mxgraph.archimate.product;overflow=fill',
  },
  _original_width: 100,
  _original_height: 75,
}

export function Product(props: DiagramNodeProps) {
  return <Shape {...PRODUCT} {...props} _style={extendStyle(PRODUCT, props)} />
}
