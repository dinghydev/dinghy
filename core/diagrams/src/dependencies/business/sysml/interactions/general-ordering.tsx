import { Dependency, extendStyle } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const GENERAL_ORDERING = {
  _style: {
    dependency:
      'edgeStyle=none;html=1;endArrow=none;verticalAlign=bottom;dashed=1;strokeWidth=2;',
  },
}

export function GeneralOrdering(props: NodeProps) {
  return <Dependency {...props} _style={extendStyle(props, GENERAL_ORDERING)} />
}
