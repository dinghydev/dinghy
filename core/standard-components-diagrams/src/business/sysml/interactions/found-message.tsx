import { Dependency, extendStyle } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const FOUND_MESSAGE = {
  _style: {
    dependency:
      'edgeStyle=none;html=1;endArrow=open;endSize=12;verticalAlign=bottom;startArrow=sysMLFound;startSize=12;',
  },
}

export function FoundMessage(props: DiagramNodeProps) {
  return (
    <Dependency
      {...FOUND_MESSAGE}
      {...props}
      _style={extendStyle(FOUND_MESSAGE, props)}
    />
  )
}
