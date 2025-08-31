import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SAE_SERVERLESS_APP_ENGINE = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.sae_serverless_app_engine;',
  },
  _width: 48.6,
  _height: 54.900000000000006,
}

export function SaeServerlessAppEngine(props: DiagramNodeProps) {
  return (
    <Shape
      {...SAE_SERVERLESS_APP_ENGINE}
      {...props}
      _style={extendStyle(SAE_SERVERLESS_APP_ENGINE, props)}
    />
  )
}
