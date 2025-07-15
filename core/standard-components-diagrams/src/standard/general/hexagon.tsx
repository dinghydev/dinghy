import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const HEXAGON = {
  _style:
    'shape=hexagon;perimeter=hexagonPerimeter2;whiteSpace=wrap;html=1;fixedSize=1;',
  _width: 120,
  _height: 80,
}

export function Hexagon(props: DiagramNodeProps) {
  return <Shape {...HEXAGON} {...props} />
}
