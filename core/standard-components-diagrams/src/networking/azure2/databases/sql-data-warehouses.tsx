import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SQL_DATA_WAREHOUSES = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/databases/SQL_Data_Warehouses.svg;',
  _width: 64,
  _height: 65,
}

export function SqlDataWarehouses(props: DiagramNodeProps) {
  return <Shape {...SQL_DATA_WAREHOUSES} {...props} />
}
