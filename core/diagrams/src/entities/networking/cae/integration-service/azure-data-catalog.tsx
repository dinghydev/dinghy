import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const AZURE_DATA_CATALOG = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Data_Catalog.svg;strokeColor=none;',
  },
  _original_width: 47,
  _original_height: 50,
}

export function AzureDataCatalog(props: NodeProps) {
  return (
    <Shape
      {...AZURE_DATA_CATALOG}
      {...props}
      _style={extendStyle(AZURE_DATA_CATALOG, props)}
    />
  )
}
