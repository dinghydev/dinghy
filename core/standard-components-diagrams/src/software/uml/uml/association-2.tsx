import { Dependency, extendStyle } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ASSOCIATION_2 = {
  _style: {
    dependency: 'endArrow=block;startArrow=block;endFill=1;startFill=1;html=1;',
  },
}

export function Association2(props: DiagramNodeProps) {
  return (
    <Dependency
      {...ASSOCIATION_2}
      {...props}
      _style={extendStyle(ASSOCIATION_2, props)}
    />
  )
}
