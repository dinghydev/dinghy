import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PACKAGE = {
  _style: {
    entity:
      'html=1;shape=mxgraph.sysml.package;html=1;overflow=fill;whiteSpace=wrap;',
  },
  _width: 300,
  _height: 135,
}

export function Package(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, PACKAGE)} />
}
