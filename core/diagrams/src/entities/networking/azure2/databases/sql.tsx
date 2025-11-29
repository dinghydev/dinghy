import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SQL = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/databases/Azure_SQL.svg;strokeColor=none;',
  },
  _original_width: 64,
  _original_height: 46,
}

export function Sql(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, SQL)} />
}
