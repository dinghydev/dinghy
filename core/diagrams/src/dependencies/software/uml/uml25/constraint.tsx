import { Dependency, extendStyle } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CONSTRAINT = {
  _style: {
    dependency:
      'endArrow=none;startArrow=none;endFill=0;startFill=0;endSize=8;html=1;verticalAlign=bottom;dashed=1;labelBackgroundColor=none;dashPattern=10 10;',
  },
}

export function Constraint(props: NodeProps) {
  return <Dependency {...props} _style={extendStyle(props, CONSTRAINT)} />
}
