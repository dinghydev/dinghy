import { Dependency, extendStyle } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VIRTUAL_2 = {
  _style: {
    dependency:
      'endArrow=block;html=1;startArrow=block;startFill=1;endFill=1;strokeColor=#FB9F41;dashed=1;dashPattern=5 5;',
  },
}

export function Virtual2(props: DiagramNodeProps) {
  return (
    <Dependency
      {...VIRTUAL_2}
      {...props}
      _style={extendStyle(VIRTUAL_2, props)}
    />
  )
}
