import { Dependency, extendStyle } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CONFORM = {
  _style: {
    dependency:
      'edgeStyle=none;html=1;endArrow=open;endSize=12;dashed=1;verticalAlign=bottom;',
  },
}

export function Conform(props: NodeProps) {
  return (
    <Dependency {...CONFORM} {...props} _style={extendStyle(CONFORM, props)} />
  )
}
