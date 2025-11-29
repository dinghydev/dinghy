import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const IS_CONTROL = {
  _style: {
    entity:
      'html=1;shape=mxgraph.sysml.isControl;whiteSpace=wrap;align=center;',
  },
  _width: 300,
  _height: 60,
}

export function IsControl(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, IS_CONTROL)} />
}
