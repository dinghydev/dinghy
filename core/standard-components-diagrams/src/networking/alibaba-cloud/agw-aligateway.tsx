import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const AGW_ALIGATEWAY = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.agw_aligateway;',
  _width: 47.1,
  _height: 39.6,
}

export function AgwAligateway(props: DiagramNodeProps) {
  return <Shape {...AGW_ALIGATEWAY} {...props} />
}
