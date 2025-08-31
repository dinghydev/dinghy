import { Dependency, extendStyle } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CONNECTOR = {
  _style: {
    dependency:
      'html=1;labelBackgroundColor=#ffffff;jettySize=auto;orthogonalLoop=1;strokeWidth=1;fontSize=14;endArrow=none;endFill=0;',
  },
}

export function Connector(props: DiagramNodeProps) {
  return (
    <Dependency
      {...CONNECTOR}
      {...props}
      _style={extendStyle(CONNECTOR, props)}
    />
  )
}
