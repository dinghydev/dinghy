import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const MIGRATE = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/migrate/Azure_Migrate.svg;strokeColor=none;',
  },
  _original_width: 72,
  _original_height: 44,
}

export function Migrate(props: DiagramNodeProps) {
  return <Shape {...MIGRATE} {...props} _style={extendStyle(MIGRATE, props)} />
}
