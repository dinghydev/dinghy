import { Dependency, extendStyle } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const RATE_4 = {
  _style: {
    dependency:
      'edgeStyle=none;html=1;endArrow=open;endSize=12;verticalAlign=top;labelBackgroundColor=none;',
  },
}

export function Rate4(props: NodeProps) {
  return (
    <Dependency {...RATE_4} {...props} _style={extendStyle(RATE_4, props)} />
  )
}
