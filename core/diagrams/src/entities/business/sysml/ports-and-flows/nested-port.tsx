import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const NESTED_PORT = {
  _style: {
    entity:
      'html=1;shape=mxgraph.sysml.nestedPort;fontStyle=1;whiteSpace=wrap;align=center;',
  },
  _width: 160,
  _height: 60,
}

export function NestedPort(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, NESTED_PORT)} />
}
