import { Dependency, extendStyle } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const REQUIRED_INTERFACE = {
  _style: {
    dependency:
      'html=1;verticalAlign=bottom;labelBackgroundColor=none;endArrow=halfCircle;endFill=0;endSize=2;',
  },
}

export function RequiredInterface(props: NodeProps) {
  return (
    <Dependency {...props} _style={extendStyle(props, REQUIRED_INTERFACE)} />
  )
}
