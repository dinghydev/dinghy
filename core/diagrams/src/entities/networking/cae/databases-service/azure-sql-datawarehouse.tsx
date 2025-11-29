import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const AZURE_SQL_DATAWAREHOUSE = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/SQL_DataWarehouse.svg;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 48,
}

export function AzureSqlDatawarehouse(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, AZURE_SQL_DATAWAREHOUSE)} />
  )
}
