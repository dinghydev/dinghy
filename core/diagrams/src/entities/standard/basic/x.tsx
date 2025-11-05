import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const X_CONST = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.x',
  },
  _original_width: 100,
  _original_height: 100,
}

export function X(props: NodeProps) {
  return <Shape {...X_CONST} {...props} _style={extendStyle(X_CONST, props)} />
}
