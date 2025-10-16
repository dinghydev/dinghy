import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CLOUD_SHIELD = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.cloud_shield;',
  },
  _original_width: 45.6,
  _original_height: 48.9,
}

export function CloudShield(props: DiagramNodeProps) {
  return (
    <Shape
      {...CLOUD_SHIELD}
      {...props}
      _style={extendStyle(CLOUD_SHIELD, props)}
    />
  )
}
