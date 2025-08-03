import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DATA_CATALOG = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/integration/Azure_Data_Catalog.svg;strokeColor=none;',
  _width: 60,
  _height: 67,
}

export function DataCatalog(props: DiagramNodeProps) {
  return <Shape {...DATA_CATALOG} {...props} />
}
