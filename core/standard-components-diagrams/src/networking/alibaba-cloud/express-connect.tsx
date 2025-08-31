import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const EXPRESS_CONNECT = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.express_connect;',
  },
  _width: 51.6,
  _height: 47.400000000000006,
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
