import { Dependency, extendStyle } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const LINE = {
  _style: {
    dependency: 'endArrow=none;html=1;',
  },
}

export function Line(props: NodeProps) {
  return <Dependency {...props} _style={extendStyle(props, LINE)} />
}
