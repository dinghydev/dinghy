import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CLOUD_MONITORING = {
  _style: {
    entity:
      'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;fillColor=#3B8DF1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.cloud_monitoring',
  },
  _original_width: 90,
  _original_height: 100,
}

export function CloudMonitoring(props: NodeProps) {
  return (
    <Shape
      {...CLOUD_MONITORING}
      {...props}
      _style={extendStyle(CLOUD_MONITORING, props)}
    />
  )
}
