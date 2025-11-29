import { Dependency, extendStyle } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TRANSMISSION_PATH = {
  _style: {
    dependency: 'endArrow=none;html=1;strokeWidth=1;',
  },
}

export function TransmissionPath(props: NodeProps) {
  return (
    <Dependency {...props} _style={extendStyle(props, TRANSMISSION_PATH)} />
  )
}
