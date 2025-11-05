import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DATA_CATALOG = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/integration/Azure_Data_Catalog.svg;strokeColor=none;',
  },
  _original_width: 60,
  _original_height: 67,
}

export function DataCatalog(props: NodeProps) {
  return (
    <Shape
      {...DATA_CATALOG}
      {...props}
      _style={extendStyle(DATA_CATALOG, props)}
    />
  )
}
