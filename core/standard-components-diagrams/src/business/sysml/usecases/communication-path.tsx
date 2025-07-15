import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const COMMUNICATION_PATH = {
  _style: 'edgeStyle=none;html=1;endArrow=none;verticalAlign=bottom;',
  _width: 160,
  _height: 0,
}

export function CommunicationPath(props: DiagramNodeProps) {
  return <Dependency {...COMMUNICATION_PATH} {...props} />
}
