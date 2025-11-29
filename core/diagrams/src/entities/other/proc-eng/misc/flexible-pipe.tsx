import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const FLEXIBLE_PIPE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.misc.flexible_pipe;pointerEvents=1;',
  },
  _width: 60,
  _height: 16,
}

export function FlexiblePipe(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, FLEXIBLE_PIPE)} />
}
