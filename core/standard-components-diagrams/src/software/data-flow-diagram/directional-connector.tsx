import { Dependency, extendStyle } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DIRECTIONAL_CONNECTOR = {
  _style: {
    dependency: 'endArrow=classic;html=1;',
  },
}

export function DirectionalConnector(props: DiagramNodeProps) {
  return (
    <Dependency
      {...DIRECTIONAL_CONNECTOR}
      {...props}
      _style={extendStyle(DIRECTIONAL_CONNECTOR, props)}
    />
  )
}
