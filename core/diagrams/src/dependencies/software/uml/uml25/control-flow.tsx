import { Dependency, extendStyle } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CONTROL_FLOW = {
  _style: {
    dependency:
      'html=1;verticalAlign=top;labelBackgroundColor=none;endArrow=open;endFill=0;',
  },
}

export function ControlFlow(props: NodeProps) {
  return <Dependency {...props} _style={extendStyle(props, CONTROL_FLOW)} />
}
