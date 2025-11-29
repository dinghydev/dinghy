import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DATA_LAKE_STORE_GEN1 = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/analytics/Data_Lake_Store_Gen1.svg;strokeColor=none;',
  },
  _original_width: 64,
  _original_height: 52,
}

export function DataLakeStoreGen1(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, DATA_LAKE_STORE_GEN1)} />
}
