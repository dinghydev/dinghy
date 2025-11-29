import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const OPTIONAL = {
  _style: {
    entity:
      'html=1;shape=mxgraph.sysml.isActStream;align=left;spacingLeft=5;verticalAlign=top;spacingTop=-3;fontStyle=1;',
  },
  _width: 0,
  _height: 100,
}

export function Optional(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, OPTIONAL)} />
}
