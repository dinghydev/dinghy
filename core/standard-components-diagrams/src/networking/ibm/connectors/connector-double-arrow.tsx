import { Dependency, extendStyle } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CONNECTOR_DOUBLE_ARROW = {
  _style: {
    dependency:
      'html=1;labelBackgroundColor=#ffffff;startArrow=classic;startFill=1;startSize=6;endArrow=classic;endFill=1;endSize=6;jettySize=auto;orthogonalLoop=1;strokeWidth=1;fontSize=14;',
  },
}

export function ConnectorDoubleArrow(props: DiagramNodeProps) {
  return (
    <Dependency
      {...CONNECTOR_DOUBLE_ARROW}
      {...props}
      _style={extendStyle(CONNECTOR_DOUBLE_ARROW, props)}
    />
  )
}
