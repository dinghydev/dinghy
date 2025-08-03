import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const STORAGE_EXPLORER = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/storage/Storage_Explorer.svg;strokeColor=none;',
  _width: 58.4,
  _height: 68,
}

export function StorageExplorer(props: DiagramNodeProps) {
  return <Shape {...STORAGE_EXPLORER} {...props} />
}
