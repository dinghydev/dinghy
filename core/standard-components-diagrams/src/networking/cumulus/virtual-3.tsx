import { Dependency, extendStyle } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VIRTUAL_3 = {
  _style: {
    dependency:
      'endArrow=block;html=1;startArrow=block;startFill=1;endFill=1;strokeColor=#FCC548;dashed=1;dashPattern=5 5;',
  },
}

export function Virtual3(props: DiagramNodeProps) {
  return (
    <Dependency
      {...VIRTUAL_3}
      {...props}
      _style={extendStyle(VIRTUAL_3, props)}
    />
  )
}
