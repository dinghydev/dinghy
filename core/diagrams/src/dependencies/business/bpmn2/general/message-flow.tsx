import { Dependency, extendStyle } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MESSAGE_FLOW = {
  _style: {
    dependency:
      'dashed=1;dashPattern=8 4;endArrow=blockThin;endFill=1;startArrow=oval;startFill=0;endSize=6;startSize=4;html=1;',
  },
}

export function MessageFlow(props: NodeProps) {
  return <Dependency {...props} _style={extendStyle(props, MESSAGE_FLOW)} />
}
