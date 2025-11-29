import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SPACER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.piping.spacer;',
  },
  _width: 20,
  _height: 60,
}

export function Spacer(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, SPACER)} />
}
