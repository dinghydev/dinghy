import { Dependency, extendStyle } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MESSAGE = {
  _style: {
    dependency:
      'html=1;verticalAlign=bottom;labelBackgroundColor=none;endArrow=open;endFill=0;',
  },
}

export function Message(props: NodeProps) {
  return (
    <Dependency {...MESSAGE} {...props} _style={extendStyle(MESSAGE, props)} />
  )
}
