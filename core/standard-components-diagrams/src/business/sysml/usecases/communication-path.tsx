import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const COMMUNICATION_PATH = {
  _style: {
    dependency: 'edgeStyle=none;html=1;endArrow=none;verticalAlign=bottom;',
  },
}

export function CommunicationPath(props: DiagramNodeProps) {
  return <Dependency {...COMMUNICATION_PATH} {...props} />
}
