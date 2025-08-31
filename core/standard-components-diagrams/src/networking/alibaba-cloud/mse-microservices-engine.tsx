import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MSE_MICROSERVICES_ENGINE = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.mse_microservices_engine;',
  _width: 60,
  _height: 60,
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
