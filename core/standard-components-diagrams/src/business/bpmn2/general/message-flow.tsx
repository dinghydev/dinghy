import { Dependency, extendStyle } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MESSAGE_FLOW = {
  _style: {
    dependency:
      'dashed=1;dashPattern=8 4;endArrow=blockThin;endFill=1;startArrow=oval;startFill=0;endSize=6;startSize=4;html=1;',
  },
}

export function MessageFlow(props: DiagramNodeProps) {
  return (
    <Dependency
      {...MESSAGE_FLOW}
      {...props}
      _style={extendStyle(MESSAGE_FLOW, props)}
    />
  )
}
