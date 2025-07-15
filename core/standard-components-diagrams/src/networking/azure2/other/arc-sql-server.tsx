import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ARC_SQL_SERVER = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Arc_SQL_Server.svg;',
  _width: 64.8,
  _height: 68,
}

export function ArcSqlServer(props: DiagramNodeProps) {
  return <Shape {...ARC_SQL_SERVER} {...props} />
}
