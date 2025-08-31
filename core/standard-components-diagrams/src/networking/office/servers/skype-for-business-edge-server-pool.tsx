import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SKYPE_FOR_BUSINESS_EDGE_SERVER_POOL = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.servers.skype_for_business_edge_server_pool;',
  },
  _width: 70,
  _height: 60,
}

export function SkypeForBusinessEdgeServerPool(props: DiagramNodeProps) {
  return (
    <Shape
      {...SKYPE_FOR_BUSINESS_EDGE_SERVER_POOL}
      {...props}
      _style={extendStyle(SKYPE_FOR_BUSINESS_EDGE_SERVER_POOL, props)}
    />
  )
}
