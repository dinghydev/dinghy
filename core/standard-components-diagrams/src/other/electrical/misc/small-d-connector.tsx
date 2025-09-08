import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SMALL_D_CONNECTOR = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.miscellaneous.small_d_connector',
  },
  _original_width: 150,
  _original_height: 75,
}

export function SmallDConnector(props: DiagramNodeProps) {
  return (
    <Shape
      {...SMALL_D_CONNECTOR}
      {...props}
      _style={extendStyle(SMALL_D_CONNECTOR, props)}
    />
  )
}
