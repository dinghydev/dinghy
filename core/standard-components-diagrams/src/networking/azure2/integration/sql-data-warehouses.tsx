import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SQL_DATA_WAREHOUSES = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/integration/SQL_Data_Warehouses.svg;strokeColor=none;',
  },
  _width: 64,
  _height: 65,
}

export function SqlDataWarehouses(props: DiagramNodeProps) {
  return (
    <Shape
      {...SQL_DATA_WAREHOUSES}
      {...props}
      _style={extendStyle(SQL_DATA_WAREHOUSES, props)}
    />
  )
}
