import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PRODUCT_VISUALIZE = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/dynamics365/ProductVisualize.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
}

export function ProductVisualize(props: DiagramNodeProps) {
  return (
    <Shape
      {...PRODUCT_VISUALIZE}
      {...props}
      _style={extendStyle(PRODUCT_VISUALIZE, props)}
    />
  )
}
