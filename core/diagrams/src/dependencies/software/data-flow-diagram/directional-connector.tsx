import { Dependency, extendStyle } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DIRECTIONAL_CONNECTOR = {
  _style: {
    dependency: 'endArrow=classic;html=1;',
  },
}

export function DirectionalConnector(props: NodeProps) {
  return (
    <Dependency {...props} _style={extendStyle(props, DIRECTIONAL_CONNECTOR)} />
  )
}
