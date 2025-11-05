import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ARC_SQL_SERVER = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Arc_SQL_Server.svg;strokeColor=none;',
  },
  _original_width: 64.8,
  _original_height: 68,
}

export function ArcSqlServer(props: NodeProps) {
  return (
    <Shape
      {...ARC_SQL_SERVER}
      {...props}
      _style={extendStyle(ARC_SQL_SERVER, props)}
    />
  )
}
