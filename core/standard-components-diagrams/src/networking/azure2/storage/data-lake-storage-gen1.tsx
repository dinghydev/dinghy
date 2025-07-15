import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DATA_LAKE_STORAGE_GEN1 = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/storage/Data_Lake_Storage_Gen1.svg;',
  _width: 64,
  _height: 52,
}

export function DataLakeStorageGen1(props: DiagramNodeProps) {
  return <Shape {...DATA_LAKE_STORAGE_GEN1} {...props} />
}
