import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SQL = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/databases/Azure_SQL.svg;strokeColor=none;',
  _width: 64,
  _height: 46,
}

export function Sql(props: DiagramNodeProps) {
  return <Shape {...SQL} {...props} />
}
