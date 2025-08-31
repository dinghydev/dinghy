import { Dependency, extendStyle } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LOST_MESSAGE = {
  _style: {
    dependency:
      'edgeStyle=none;html=1;endArrow=sysMLLost;endSize=12;verticalAlign=bottom;',
  },
}

export function LostMessage(props: DiagramNodeProps) {
  return (
    <Dependency
      {...LOST_MESSAGE}
      {...props}
      _style={extendStyle(LOST_MESSAGE, props)}
    />
  )
}
