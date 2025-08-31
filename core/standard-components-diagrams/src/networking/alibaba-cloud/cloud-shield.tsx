import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CLOUD_SHIELD = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.cloud_shield;',
  _width: 45.6,
  _height: 48.9,
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
