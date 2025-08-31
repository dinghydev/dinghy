import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SQL_MANAGED_INSTANCE = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/databases/SQL_Managed_Instance.svg;strokeColor=none;',
  },
  _width: 65,
  _height: 64,
}

export function SqlManagedInstance(props: DiagramNodeProps) {
  return (
    <Shape
      {...SQL_MANAGED_INSTANCE}
      {...props}
      _style={extendStyle(SQL_MANAGED_INSTANCE, props)}
    />
  )
}
