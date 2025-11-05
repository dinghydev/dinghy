import { Dependency, extendStyle } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const COMPONENT_100G = {
  _style: {
    dependency:
      'endArrow=block;html=1;startArrow=block;startFill=1;endFill=1;strokeColor=#2EAB6D;',
  },
}

export function Component100g(props: NodeProps) {
  return (
    <Dependency
      {...COMPONENT_100G}
      {...props}
      _style={extendStyle(COMPONENT_100G, props)}
    />
  )
}
