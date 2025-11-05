import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SWAS_SIMPLE_APPLICATION_SERVER = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.swas_simple_application_server;',
  },
  _original_width: 60,
  _original_height: 60,
}

export function SwasSimpleApplicationServer(props: NodeProps) {
  return (
    <Shape
      {...SWAS_SIMPLE_APPLICATION_SERVER}
      {...props}
      _style={extendStyle(SWAS_SIMPLE_APPLICATION_SERVER, props)}
    />
  )
}
