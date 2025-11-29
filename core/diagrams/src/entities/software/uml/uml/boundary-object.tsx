import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BOUNDARY_OBJECT = {
  _style: {
    entity: 'shape=umlBoundary;whiteSpace=wrap;html=1;',
  },
  _width: 100,
  _height: 80,
}

export function BoundaryObject(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, BOUNDARY_OBJECT)} />
}
