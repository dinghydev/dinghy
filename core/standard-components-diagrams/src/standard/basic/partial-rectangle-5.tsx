import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PARTIAL_RECTANGLE_5 = {
  _style:
    'shape=partialRectangle;whiteSpace=wrap;html=1;top=0;left=0;fillColor=none;',
  _width: 120,
  _height: 60,
}

export function PartialRectangle5(props: DiagramNodeProps) {
  return <Shape {...PARTIAL_RECTANGLE_5} {...props} />
}
