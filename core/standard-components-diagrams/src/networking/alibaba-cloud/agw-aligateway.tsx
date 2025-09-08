import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const AGW_ALIGATEWAY = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.agw_aligateway;',
  },
  _original_width: 47.1,
  _original_height: 39.6,
}

export function AgwAligateway(props: DiagramNodeProps) {
  return (
    <Shape
      {...AGW_ALIGATEWAY}
      {...props}
      _style={extendStyle(AGW_ALIGATEWAY, props)}
    />
  )
}
