import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const AZURE_SQL_DATAWAREHOUSE = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/SQL_DataWarehouse.svg;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 48,
}

export function AzureSqlDatawarehouse(props: DiagramNodeProps) {
  return (
    <Shape
      {...AZURE_SQL_DATAWAREHOUSE}
      {...props}
      _style={extendStyle(AZURE_SQL_DATAWAREHOUSE, props)}
    />
  )
}
