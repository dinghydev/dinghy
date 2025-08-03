import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TRANSMISSION_PATH = {
  _style: {
    dependency: 'endArrow=none;html=1;strokeWidth=1;',
  },
}

export function TransmissionPath(props: DiagramNodeProps) {
  return <Dependency {...TRANSMISSION_PATH} {...props} />
}
