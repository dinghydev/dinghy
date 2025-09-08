import { Dependency, extendStyle } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

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
