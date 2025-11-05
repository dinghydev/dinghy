import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SQL_SERVER = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/databases/SQL_Server.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
}

export function SqlServer(props: NodeProps) {
  return (
    <Shape {...SQL_SERVER} {...props} _style={extendStyle(SQL_SERVER, props)} />
  )
}
