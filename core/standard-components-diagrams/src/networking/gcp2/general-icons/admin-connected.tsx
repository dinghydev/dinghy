import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ADMIN_CONNECTED = {
  _style: {
    entity:
      'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;fillColor=#3B8DF1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.admin_connected',
  },
  _original_width: 100,
  _original_height: 100,
}

export function AdminConnected(props: DiagramNodeProps) {
  return (
    <Shape
      {...ADMIN_CONNECTED}
      {...props}
      _style={extendStyle(ADMIN_CONNECTED, props)}
    />
  )
}
