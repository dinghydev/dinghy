import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ESS_ELASTIC_SCALING_SERVICE = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.ess_elastic_scaling_service;',
  },
  _original_width: 55.2,
  _original_height: 30.3,
}

export function EssElasticScalingService(props: DiagramNodeProps) {
  return (
    <Shape
      {...ESS_ELASTIC_SCALING_SERVICE}
      {...props}
      _style={extendStyle(ESS_ELASTIC_SCALING_SERVICE, props)}
    />
  )
}
