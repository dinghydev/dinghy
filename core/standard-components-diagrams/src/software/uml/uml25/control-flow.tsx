import { Dependency, extendStyle } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CONTROL_FLOW = {
  _style: {
    dependency:
      'html=1;verticalAlign=top;labelBackgroundColor=none;endArrow=open;endFill=0;',
  },
}

export function ControlFlow(props: DiagramNodeProps) {
  return (
    <Dependency
      {...CONTROL_FLOW}
      {...props}
      _style={extendStyle(CONTROL_FLOW, props)}
    />
  )
}
