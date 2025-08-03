import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PRODUCT_VISUALIZE = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/dynamics365/ProductVisualize.svg;strokeColor=none;',
  _width: 68,
  _height: 68,
}

export function ProductVisualize(props: DiagramNodeProps) {
  return <Shape {...PRODUCT_VISUALIZE} {...props} />
}
