import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PARTIAL_RECTANGLE_2 = {
  _style:
    'shape=partialRectangle;whiteSpace=wrap;html=1;top=0;bottom=0;fillColor=none;',
  _width: 120,
  _height: 60,
}

export function PartialRectangle2(props: DiagramNodeProps) {
  return <Shape {...PARTIAL_RECTANGLE_2} {...props} />
}
