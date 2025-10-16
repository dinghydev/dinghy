import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CLOUD_CONFIG = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.cloud_config;',
  },
  _original_width: 47.400000000000006,
  _original_height: 48,
}

export function CloudConfig(props: DiagramNodeProps) {
  return (
    <Shape
      {...CLOUD_CONFIG}
      {...props}
      _style={extendStyle(CLOUD_CONFIG, props)}
    />
  )
}
