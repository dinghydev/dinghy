import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SMALL_D_CONNECTOR = {
  _style:
    'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.miscellaneous.small_d_connector',
  _width: 150,
  _height: 75,
}

export function SmallDConnector(props: DiagramNodeProps) {
  return <Shape {...SMALL_D_CONNECTOR} {...props} />
}
