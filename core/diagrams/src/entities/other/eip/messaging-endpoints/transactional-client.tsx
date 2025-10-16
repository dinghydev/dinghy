import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const TRANSACTIONAL_CLIENT = {
  _style: {
    entity:
      'fillColor=#c0f5a9;dashed=0;outlineConnect=0;strokeWidth=2;html=1;align=center;fontSize=8;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.eip.transactional_client;',
  },
  _width: 150,
  _height: 90,
}

export function TransactionalClient(props: DiagramNodeProps) {
  return (
    <Shape
      {...TRANSACTIONAL_CLIENT}
      {...props}
      _style={extendStyle(TRANSACTIONAL_CLIENT, props)}
    />
  )
}
