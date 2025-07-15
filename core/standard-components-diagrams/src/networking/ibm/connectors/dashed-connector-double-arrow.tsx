import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DASHED_CONNECTOR_DOUBLE_ARROW = {
  _style:
    'html=1;labelBackgroundColor=#ffffff;startArrow=classic;startFill=1;startSize=6;endArrow=classic;endFill=1;endSize=6;jettySize=auto;orthogonalLoop=1;strokeWidth=1;dashed=1;fontSize=14;',
  _width: 60,
  _height: 60,
}

export function DashedConnectorDoubleArrow(props: DiagramNodeProps) {
  return <Dependency {...DASHED_CONNECTOR_DOUBLE_ARROW} {...props} />
}
