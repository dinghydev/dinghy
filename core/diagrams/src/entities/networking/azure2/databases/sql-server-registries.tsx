import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SQL_SERVER_REGISTRIES = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/databases/SQL_Server_Registries.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 62,
}

export function SqlServerRegistries(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, SQL_SERVER_REGISTRIES)} />
}
