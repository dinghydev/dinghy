import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CLOUD_EXCHANGE_ONLINE = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;outlineConnect=0;verticalAlign=top;align=center;shape=mxgraph.office.clouds.cloud_exchange_online;',
  _width: 100,
  _height: 61,
}

export function CloudExchangeOnline(props: DiagramNodeProps) {
  return <Shape {...CLOUD_EXCHANGE_ONLINE} {...props} />
}
