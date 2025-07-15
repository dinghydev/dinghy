import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TRANSACTIONAL_CLIENT = {
  _style:
    'fillColor=#c0f5a9;dashed=0;outlineConnect=0;strokeWidth=2;html=1;align=center;fontSize=8;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.eip.transactional_client;',
  _width: 150,
  _height: 90,
}

export function TransactionalClient(props: DiagramNodeProps) {
  return <Shape {...TRANSACTIONAL_CLIENT} {...props} />
}
