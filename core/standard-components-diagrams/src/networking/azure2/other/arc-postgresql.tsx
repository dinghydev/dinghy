import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ARC_POSTGRESQL = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Arc_PostgreSQL.svg;strokeColor=none;',
  },
  _width: 65.08,
  _height: 68,
}

export function ArcPostgresql(props: DiagramNodeProps) {
  return (
    <Shape
      {...ARC_POSTGRESQL}
      {...props}
      _style={extendStyle(ARC_POSTGRESQL, props)}
    />
  )
}
