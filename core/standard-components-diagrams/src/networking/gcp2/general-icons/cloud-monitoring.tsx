import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CLOUD_MONITORING = {
  _style:
    'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;fillColor=#3B8DF1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.cloud_monitoring',
  _width: 90,
  _height: 100,
}

export function CloudMonitoring(props: DiagramNodeProps) {
  return <Shape {...CLOUD_MONITORING} {...props} />
}
