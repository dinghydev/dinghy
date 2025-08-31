import { Dependency, extendStyle } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const INNER_CLASS = {
  _style: {
    dependency:
      'endArrow=open;startArrow=circlePlus;endFill=0;startFill=0;endSize=8;html=1;',
  },
}

export function InnerClass(props: DiagramNodeProps) {
  return (
    <Dependency
      {...INNER_CLASS}
      {...props}
      _style={extendStyle(INNER_CLASS, props)}
    />
  )
}
