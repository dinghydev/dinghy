import { Dependency, extendStyle } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const INNER_CLASS = {
  _style: {
    dependency:
      'endArrow=circlePlus;startArrow=none;endFill=0;startFill=0;endSize=8;html=1;labelBackgroundColor=none;',
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
