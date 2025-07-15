import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CONNECTOR_SINGLE_ARROW = {
  _style:
    'html=1;labelBackgroundColor=#ffffff;endArrow=classic;endFill=1;endSize=6;jettySize=auto;orthogonalLoop=1;strokeWidth=1;fontSize=14;',
  _width: 60,
  _height: 60,
}

export function ConnectorSingleArrow(props: DiagramNodeProps) {
  return <Dependency {...CONNECTOR_SINGLE_ARROW} {...props} />
}
