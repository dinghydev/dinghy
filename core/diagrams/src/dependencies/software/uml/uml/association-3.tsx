import { Dependency, extendStyle } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ASSOCIATION_3 = {
  _style: {
    dependency: 'endArrow=open;endFill=1;endSize=12;html=1;',
  },
}

export function Association3(props: NodeProps) {
  return <Dependency {...props} _style={extendStyle(props, ASSOCIATION_3)} />
}
