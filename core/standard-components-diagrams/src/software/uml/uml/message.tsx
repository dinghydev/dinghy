import { Dependency, extendStyle } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const MESSAGE = {
  _style: {
    dependency:
      'html=1;verticalAlign=bottom;endArrow=block;curved=0;rounded=0;',
  },
}

export function Message(props: DiagramNodeProps) {
  return (
    <Dependency {...MESSAGE} {...props} _style={extendStyle(MESSAGE, props)} />
  )
}
