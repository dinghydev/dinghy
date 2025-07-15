import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DATA_LAKE_STORAGE = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Data_Lake_Storage.svg;',
  _width: 50,
  _height: 46,
}

export function DataLakeStorage(props: DiagramNodeProps) {
  return <Shape {...DATA_LAKE_STORAGE} {...props} />
}
