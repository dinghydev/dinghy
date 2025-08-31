import { Dependency, extendStyle } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const COMPONENT_1G = {
  _style: {
    dependency:
      'endArrow=block;html=1;startArrow=block;startFill=1;endFill=1;strokeColor=#EB4770;',
  },
}

export function Component1g(props: DiagramNodeProps) {
  return (
    <Dependency
      {...COMPONENT_1G}
      {...props}
      _style={extendStyle(COMPONENT_1G, props)}
    />
  )
}
