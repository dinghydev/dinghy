import { Dependency, extendStyle } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

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
