import { Dependency, extendStyle } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CONSTRAINT = {
  _style: {
    dependency:
      'endArrow=none;startArrow=none;endFill=0;startFill=0;endSize=8;html=1;verticalAlign=bottom;dashed=1;labelBackgroundColor=none;dashPattern=10 10;',
  },
}

export function Constraint(props: DiagramNodeProps) {
  return (
    <Dependency
      {...CONSTRAINT}
      {...props}
      _style={extendStyle(CONSTRAINT, props)}
    />
  )
}
