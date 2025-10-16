import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CLOUD_SERVER = {
  _style: {
    entity:
      'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;fillColor=#3B8DF1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.cloud_server',
  },
  _original_width: 100,
  _original_height: 89,
}

export function CloudServer(props: DiagramNodeProps) {
  return (
    <Shape
      {...CLOUD_SERVER}
      {...props}
      _style={extendStyle(CLOUD_SERVER, props)}
    />
  )
}
