import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PARTIAL_RECTANGLE_3 = {
  _style:
    'shape=partialRectangle;whiteSpace=wrap;html=1;right=0;top=0;bottom=0;fillColor=none;routingCenterX=-0.5;',
  _width: 120,
  _height: 60,
}

export function PartialRectangle3(props: DiagramNodeProps) {
  return <Shape {...PARTIAL_RECTANGLE_3} {...props} />
}
