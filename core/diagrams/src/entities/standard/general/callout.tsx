import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CALLOUT = {
  _style: {
    entity: 'shape=callout;whiteSpace=wrap;html=1;perimeter=calloutPerimeter;',
  },
  _width: 120,
  _height: 80,
}

export function Callout(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, CALLOUT)} />
}
