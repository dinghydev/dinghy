import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CLOUD_SERVER = {
  _style: {
    entity:
      'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;fillColor=#3B8DF1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.cloud_server',
  },
  _width: 100,
  _height: 89,
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
