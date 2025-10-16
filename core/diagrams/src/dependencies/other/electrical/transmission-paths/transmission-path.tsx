import { Dependency, extendStyle } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const TRANSMISSION_PATH = {
  _style: {
    dependency: 'endArrow=none;html=1;strokeWidth=1;',
  },
}

export function TransmissionPath(props: DiagramNodeProps) {
  return (
    <Dependency
      {...TRANSMISSION_PATH}
      {...props}
      _style={extendStyle(TRANSMISSION_PATH, props)}
    />
  )
}
