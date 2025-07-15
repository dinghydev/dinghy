import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CONNECTOR = {
  _style:
    'html=1;labelBackgroundColor=#ffffff;jettySize=auto;orthogonalLoop=1;strokeWidth=1;fontSize=14;endArrow=none;endFill=0;',
  _width: 60,
  _height: 60,
}

export function Connector(props: DiagramNodeProps) {
  return <Dependency {...CONNECTOR} {...props} />
}
