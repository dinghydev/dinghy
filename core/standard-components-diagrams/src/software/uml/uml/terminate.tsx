import { Dependency, extendStyle } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TERMINATE = {
  _style: {
    dependency:
      'endArrow=open;startArrow=cross;endFill=0;startFill=0;endSize=8;startSize=10;html=1;',
  },
}

export function Terminate(props: DiagramNodeProps) {
  return (
    <Dependency
      {...TERMINATE}
      {...props}
      _style={extendStyle(TERMINATE, props)}
    />
  )
}
