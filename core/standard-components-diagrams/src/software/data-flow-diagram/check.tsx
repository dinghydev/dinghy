import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CHECK = {
  _style: {
    entity:
      'shape=hexagon;perimeter=hexagonPerimeter2;whiteSpace=wrap;html=1;size=0.25',
  },
  _original_width: 100,
  _original_height: 50,
}

export function Check(props: DiagramNodeProps) {
  return <Shape {...CHECK} {...props} _style={extendStyle(CHECK, props)} />
}
