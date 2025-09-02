import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SERVER_1 = {
  _style: {
    entity:
      'strokeColor=#666666;html=1;verticalLabelPosition=bottom;labelBackgroundColor=#ffffff;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.general.server_1;',
  },
  _original_width: 73,
  _original_height: 150,
}

export function Server1(props: DiagramNodeProps) {
  return (
    <Shape {...SERVER_1} {...props} _style={extendStyle(SERVER_1, props)} />
  )
}
