import { Dependency, extendStyle } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const COMPONENT_40G = {
  _style: {
    dependency:
      'endArrow=block;html=1;startArrow=block;startFill=1;endFill=1;strokeColor=#83CA73;',
  },
}

export function Component40g(props: DiagramNodeProps) {
  return (
    <Dependency
      {...COMPONENT_40G}
      {...props}
      _style={extendStyle(COMPONENT_40G, props)}
    />
  )
}
