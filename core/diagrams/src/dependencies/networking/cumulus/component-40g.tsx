import { Dependency, extendStyle } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const COMPONENT_40G = {
  _style: {
    dependency:
      'endArrow=block;html=1;startArrow=block;startFill=1;endFill=1;strokeColor=#83CA73;',
  },
}

export function Component40g(props: NodeProps) {
  return <Dependency {...props} _style={extendStyle(props, COMPONENT_40G)} />
}
