import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const STORAGE_CONTAINER = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Storage_Container.svg;',
  _width: 64,
  _height: 52,
}

export function StorageContainer(props: DiagramNodeProps) {
  return <Shape {...STORAGE_CONTAINER} {...props} />
}
