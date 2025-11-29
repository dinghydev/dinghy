import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MIGRATE = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/migrate/Azure_Migrate.svg;strokeColor=none;',
  },
  _width: 72,
  _height: 44,
}

export function Migrate(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, MIGRATE)} />
}
