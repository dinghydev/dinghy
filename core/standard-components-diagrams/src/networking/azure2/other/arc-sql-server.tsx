import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ARC_SQL_SERVER = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Arc_SQL_Server.svg;strokeColor=none;',
  },
  _width: 64.8,
  _height: 68,
}

export function ArcSqlServer(props: DiagramNodeProps) {
  return (
    <Shape
      {...ARC_SQL_SERVER}
      {...props}
      _style={extendStyle(ARC_SQL_SERVER, props)}
    />
  )
}
