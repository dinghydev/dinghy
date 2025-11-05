import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SQL_DATA_WAREHOUSES = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/databases/SQL_Data_Warehouses.svg;strokeColor=none;',
  },
  _original_width: 64,
  _original_height: 65,
}

export function SqlDataWarehouses(props: NodeProps) {
  return (
    <Shape
      {...SQL_DATA_WAREHOUSES}
      {...props}
      _style={extendStyle(SQL_DATA_WAREHOUSES, props)}
    />
  )
}
