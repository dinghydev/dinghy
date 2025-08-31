import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ARC_SQL_MANAGED_INSTANCE = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Arc_SQL_Managed_Instance.svg;strokeColor=none;',
  _width: 64.96,
  _height: 68,
}

export function ArcSqlManagedInstance(props: DiagramNodeProps) {
  return (
    <Shape
      {...ARC_SQL_MANAGED_INSTANCE}
      {...props}
      _style={extendStyle(ARC_SQL_MANAGED_INSTANCE, props)}
    />
  )
}
