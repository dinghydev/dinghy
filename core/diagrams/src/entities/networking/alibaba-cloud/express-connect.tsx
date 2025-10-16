import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const EXPRESS_CONNECT = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.express_connect;',
  },
  _original_width: 51.6,
  _original_height: 47.400000000000006,
}

export function ExpressConnect(props: DiagramNodeProps) {
  return (
    <Shape
      {...EXPRESS_CONNECT}
      {...props}
      _style={extendStyle(EXPRESS_CONNECT, props)}
    />
  )
}
