import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const MSE_MICROSERVICES_ENGINE = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.mse_microservices_engine;',
  },
  _original_width: 54.900000000000006,
  _original_height: 54.900000000000006,
}

export function MseMicroservicesEngine(props: DiagramNodeProps) {
  return (
    <Shape
      {...MSE_MICROSERVICES_ENGINE}
      {...props}
      _style={extendStyle(MSE_MICROSERVICES_ENGINE, props)}
    />
  )
}
