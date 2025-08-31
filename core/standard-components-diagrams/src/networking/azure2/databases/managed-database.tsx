import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MANAGED_DATABASE = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/databases/Managed_Database.svg;strokeColor=none;',
  _width: 68,
  _height: 64,
}

export function ManagedDatabase(props: DiagramNodeProps) {
  return (
    <Shape
      {...MANAGED_DATABASE}
      {...props}
      _style={extendStyle(MANAGED_DATABASE, props)}
    />
  )
}
