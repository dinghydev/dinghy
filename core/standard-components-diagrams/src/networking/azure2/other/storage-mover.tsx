import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const STORAGE_MOVER = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Azure_Storage_Mover.svg;',
  _width: 68,
  _height: 66.88,
}

export function StorageMover(props: DiagramNodeProps) {
  return <Shape {...STORAGE_MOVER} {...props} />
}
