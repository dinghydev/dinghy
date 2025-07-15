import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const LARGE_D_CONNECTOR = {
  _style:
    'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.miscellaneous.large_d_connector',
  _width: 375,
  _height: 75,
}

export function LargeDConnector(props: DiagramNodeProps) {
  return <Shape {...LARGE_D_CONNECTOR} {...props} />
}
