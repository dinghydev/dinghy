import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CHECK = {
  _style:
    'shape=hexagon;perimeter=hexagonPerimeter2;whiteSpace=wrap;html=1;size=0.25',
  _width: 100,
  _height: 50,
}

export function Check(props: DiagramNodeProps) {
  return <Shape {...CHECK} {...props} />
}
