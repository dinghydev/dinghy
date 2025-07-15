import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const AZURE_SQL_DATAWAREHOUSE = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/SQL_DataWarehouse.svg;',
  _width: 50,
  _height: 48,
}

export function AzureSqlDatawarehouse(props: DiagramNodeProps) {
  return <Shape {...AZURE_SQL_DATAWAREHOUSE} {...props} />
}
