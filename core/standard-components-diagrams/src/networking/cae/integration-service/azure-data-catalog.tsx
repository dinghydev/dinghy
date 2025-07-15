import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const AZURE_DATA_CATALOG = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Data_Catalog.svg;',
  _width: 47,
  _height: 50,
}

export function AzureDataCatalog(props: DiagramNodeProps) {
  return <Shape {...AZURE_DATA_CATALOG} {...props} />
}
