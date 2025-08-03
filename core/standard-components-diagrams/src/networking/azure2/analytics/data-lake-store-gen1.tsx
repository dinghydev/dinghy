import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DATA_LAKE_STORE_GEN1 = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/analytics/Data_Lake_Store_Gen1.svg;strokeColor=none;',
  _width: 64,
  _height: 52,
}

export function DataLakeStoreGen1(props: DiagramNodeProps) {
  return <Shape {...DATA_LAKE_STORE_GEN1} {...props} />
}
