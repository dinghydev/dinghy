import { Dependency, extendStyle } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MESSAGE_SYNCHRONOUS_CALL = {
  _style: {
    dependency:
      'html=1;verticalAlign=bottom;labelBackgroundColor=none;endArrow=block;endFill=1;',
  },
}

export function MessageSynchronousCall(props: DiagramNodeProps) {
  return (
    <Dependency
      {...MESSAGE_SYNCHRONOUS_CALL}
      {...props}
      _style={extendStyle(MESSAGE_SYNCHRONOUS_CALL, props)}
    />
  )
}
