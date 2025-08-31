import { Dependency, extendStyle } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FOUND_MESSAGE_2 = {
  _style: {
    dependency:
      'html=1;verticalAlign=bottom;startArrow=circle;startFill=1;endArrow=open;startSize=6;endSize=8;curved=0;rounded=0;',
  },
}

export function FoundMessage2(props: DiagramNodeProps) {
  return (
    <Dependency
      {...FOUND_MESSAGE_2}
      {...props}
      _style={extendStyle(FOUND_MESSAGE_2, props)}
    />
  )
}
