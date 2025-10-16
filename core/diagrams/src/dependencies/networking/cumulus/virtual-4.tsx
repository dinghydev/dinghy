import { Dependency, extendStyle } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const VIRTUAL_4 = {
  _style: {
    dependency:
      'endArrow=block;html=1;startArrow=block;startFill=1;endFill=1;strokeColor=#83CA73;dashed=1;dashPattern=5 5;',
  },
}

export function Virtual4(props: DiagramNodeProps) {
  return (
    <Dependency
      {...VIRTUAL_4}
      {...props}
      _style={extendStyle(VIRTUAL_4, props)}
    />
  )
}
