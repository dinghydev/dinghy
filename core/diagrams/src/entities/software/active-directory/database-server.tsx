import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DATABASE_SERVER = {
  _style: {
    entity:
      'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;spacingTop=3;image=img/lib/active_directory/database_server.svg;strokeColor=none;',
  },
  _original_width: 41,
  _original_height: 50,
}

export function DatabaseServer(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, DATABASE_SERVER)} />
}
