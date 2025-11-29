import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DATA_LAKE_STORAGE_GEN1 = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/storage/Data_Lake_Storage_Gen1.svg;strokeColor=none;',
  },
  _original_width: 64,
  _original_height: 52,
}

export function DataLakeStorageGen1(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, DATA_LAKE_STORAGE_GEN1)} />
  )
}
