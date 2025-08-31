import { Dependency, extendStyle } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ASSOCIATION_3 = {
  _style: {
    dependency: 'endArrow=open;endFill=1;endSize=12;html=1;',
  },
}

export function Association3(props: DiagramNodeProps) {
  return (
    <Dependency
      {...ASSOCIATION_3}
      {...props}
      _style={extendStyle(ASSOCIATION_3, props)}
    />
  )
}
