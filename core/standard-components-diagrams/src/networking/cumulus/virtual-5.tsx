import { Dependency, extendStyle } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VIRTUAL_5 = {
  _style: {
    dependency:
      'endArrow=block;html=1;startArrow=block;startFill=1;endFill=1;strokeColor=#2EAB6D;dashed=1;dashPattern=5 5;',
  },
}

export function Virtual5(props: DiagramNodeProps) {
  return (
    <Dependency
      {...VIRTUAL_5}
      {...props}
      _style={extendStyle(VIRTUAL_5, props)}
    />
  )
}
