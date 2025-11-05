import { Dependency, extendStyle } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const EXTEND = {
  _style: {
    dependency:
      'edgeStyle=none;html=1;startArrow=open;endArrow=none;startSize=12;verticalAlign=bottom;dashed=1;labelBackgroundColor=none;',
  },
}

export function Extend(props: NodeProps) {
  return (
    <Dependency {...EXTEND} {...props} _style={extendStyle(EXTEND, props)} />
  )
}
