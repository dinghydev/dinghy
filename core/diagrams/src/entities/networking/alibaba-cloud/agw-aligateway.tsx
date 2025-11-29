import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const AGW_ALIGATEWAY = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.agw_aligateway;',
  },
  _width: 47.1,
  _height: 39.6,
}

export function AgwAligateway(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, AGW_ALIGATEWAY)} />
}
