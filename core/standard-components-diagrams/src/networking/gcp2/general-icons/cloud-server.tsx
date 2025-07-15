import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CLOUD_SERVER = {
  _style:
    'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;fillColor=#3B8DF1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.cloud_server',
  _width: 100,
  _height: 89,
}

export function CloudServer(props: DiagramNodeProps) {
  return <Shape {...CLOUD_SERVER} {...props} />
}
