import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MIGRATE = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/migrate/Azure_Migrate.svg;strokeColor=none;',
  _width: 72,
  _height: 44,
}

export function Migrate(props: DiagramNodeProps) {
  return <Shape {...MIGRATE} {...props} />
}
