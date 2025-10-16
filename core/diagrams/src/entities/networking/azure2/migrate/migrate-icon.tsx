import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const MIGRATE_ICON = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/migrate/Azure_Migrate.svg;strokeColor=none;',
  },
  _width: 72,
  _height: 44,
}

export function MigrateIcon(props: DiagramNodeProps) {
  return (
    <Shape
      {...MIGRATE_ICON}
      {...props}
      _style={extendStyle(MIGRATE_ICON, props)}
    />
  )
}
