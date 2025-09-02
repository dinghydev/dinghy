import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const HEXAGON = {
  _style: {
    entity:
      'shape=hexagon;perimeter=hexagonPerimeter2;whiteSpace=wrap;html=1;fixedSize=1;',
  },
  _original_width: 120,
  _original_height: 80,
}

export function Hexagon(props: DiagramNodeProps) {
  return <Shape {...HEXAGON} {...props} _style={extendStyle(HEXAGON, props)} />
}
