import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TRANSACTIONAL_CLIENT = {
  _style: {
    entity:
      'fillColor=#c0f5a9;dashed=0;outlineConnect=0;strokeWidth=2;html=1;align=center;fontSize=8;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.eip.transactional_client;',
  },
  _original_width: 150,
  _original_height: 90,
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
