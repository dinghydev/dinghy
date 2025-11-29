import { Dependency, extendStyle } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const VIRTUAL_6 = {
  _style: {
    dependency:
      'endArrow=block;html=1;startArrow=block;startFill=1;endFill=1;strokeColor=#4EFDC0;dashed=1;dashPattern=5 5;',
  },
}

export function Virtual6(props: NodeProps) {
  return <Dependency {...props} _style={extendStyle(props, VIRTUAL_6)} />
}
