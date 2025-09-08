import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SQL_SERVER = {
  _style: {
    entity:
      'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;spacingTop=3;image=img/lib/active_directory/sql_server.svg;strokeColor=none;',
  },
  _original_width: 38.5,
  _original_height: 50,
}

export function SqlServer(props: DiagramNodeProps) {
  return (
    <Shape {...SQL_SERVER} {...props} _style={extendStyle(SQL_SERVER, props)} />
  )
}
