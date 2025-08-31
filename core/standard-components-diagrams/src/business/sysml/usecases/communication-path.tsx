import { Dependency, extendStyle } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const COMMUNICATION_PATH = {
  _style: {
    dependency: 'edgeStyle=none;html=1;endArrow=none;verticalAlign=bottom;',
  },
}

export function CommunicationPath(props: DiagramNodeProps) {
  return (
    <Dependency
      {...COMMUNICATION_PATH}
      {...props}
      _style={extendStyle(COMMUNICATION_PATH, props)}
    />
  )
}
