import { Dependency, extendStyle } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const COMMUNICATION_PATH = {
  _style: {
    dependency: 'edgeStyle=none;html=1;endArrow=none;verticalAlign=bottom;',
  },
}

export function CommunicationPath(props: NodeProps) {
  return (
    <Dependency {...props} _style={extendStyle(props, COMMUNICATION_PATH)} />
  )
}
