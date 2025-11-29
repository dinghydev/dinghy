import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CHECK = {
  _style: {
    entity:
      'shape=hexagon;perimeter=hexagonPerimeter2;whiteSpace=wrap;html=1;size=0.25',
  },
  _width: 100,
  _height: 50,
}

export function Check(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, CHECK)} />
}
