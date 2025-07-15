import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SQL_EDGE = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/databases/Azure_SQL_Edge.svg;',
  _width: 68,
  _height: 68,
}

export function SqlEdge(props: DiagramNodeProps) {
  return <Shape {...SQL_EDGE} {...props} />
}
