import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LARGE_D_CONNECTOR = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.miscellaneous.large_d_connector',
  },
  _original_width: 375,
  _original_height: 75,
}

export function LargeDConnector(props: DiagramNodeProps) {
  return (
    <Shape
      {...LARGE_D_CONNECTOR}
      {...props}
      _style={extendStyle(LARGE_D_CONNECTOR, props)}
    />
  )
}
