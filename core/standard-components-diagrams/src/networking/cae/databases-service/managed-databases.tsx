import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MANAGED_DATABASES = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Managed_Databases.svg;strokeColor=none;',
  _width: 47,
  _height: 50,
}

export function ManagedDatabases(props: DiagramNodeProps) {
  return (
    <Shape
      {...MANAGED_DATABASES}
      {...props}
      _style={extendStyle(MANAGED_DATABASES, props)}
    />
  )
}
