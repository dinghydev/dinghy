import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PRODUCT_VISUALIZE = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/dynamics365/ProductVisualize.svg;strokeColor=none;',
  _width: 60,
  _height: 60,
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
