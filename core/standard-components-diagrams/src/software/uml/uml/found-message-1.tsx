import { Dependency, extendStyle } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FOUND_MESSAGE_1 = {
  _style: {
    dependency:
      'html=1;verticalAlign=bottom;startArrow=oval;startFill=1;endArrow=block;startSize=8;curved=0;rounded=0;',
  },
}

export function FoundMessage1(props: DiagramNodeProps) {
  return (
    <Dependency
      {...FOUND_MESSAGE_1}
      {...props}
      _style={extendStyle(FOUND_MESSAGE_1, props)}
    />
  )
}
