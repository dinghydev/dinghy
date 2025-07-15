import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PARTIAL_RECTANGLE_3 = {
  _style:
    'shape=partialRectangle;whiteSpace=wrap;html=1;bottom=0;right=0;fillColor=none;',
  _width: 120,
  _height: 60,
}

export function PartialRectangle3(props: DiagramNodeProps) {
  return <Shape {...PARTIAL_RECTANGLE_3} {...props} />
}
