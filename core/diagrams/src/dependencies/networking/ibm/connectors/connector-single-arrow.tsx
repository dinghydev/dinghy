import { Dependency, extendStyle } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CONNECTOR_SINGLE_ARROW = {
  _style: {
    dependency:
      'html=1;labelBackgroundColor=#ffffff;endArrow=classic;endFill=1;endSize=6;jettySize=auto;orthogonalLoop=1;strokeWidth=1;fontSize=14;',
  },
}

export function ConnectorSingleArrow(props: DiagramNodeProps) {
  return (
    <Dependency
      {...CONNECTOR_SINGLE_ARROW}
      {...props}
      _style={extendStyle(CONNECTOR_SINGLE_ARROW, props)}
    />
  )
}
