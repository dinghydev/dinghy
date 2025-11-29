import { Dependency, extendStyle } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CONNECTOR_SINGLE_ARROW = {
  _style: {
    dependency:
      'html=1;labelBackgroundColor=#ffffff;endArrow=classic;endFill=1;endSize=6;jettySize=auto;orthogonalLoop=1;strokeWidth=1;fontSize=14;',
  },
}

export function ConnectorSingleArrow(props: NodeProps) {
  return (
    <Dependency
      {...props}
      _style={extendStyle(props, CONNECTOR_SINGLE_ARROW)}
    />
  )
}
