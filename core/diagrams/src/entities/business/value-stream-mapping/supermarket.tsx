import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SUPERMARKET = {
  _style: {
    entity: 'strokeWidth=2;html=1;shape=mxgraph.lean_mapping.supermarket;',
  },
  _width: 60,
  _height: 100,
}

export function Supermarket(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, SUPERMARKET)} />
}
