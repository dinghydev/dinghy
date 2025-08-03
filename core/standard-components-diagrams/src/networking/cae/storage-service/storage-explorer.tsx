import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const STORAGE_EXPLORER = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Storage_Explorer.svg;strokeColor=none;',
  _width: 50,
  _height: 50,
}

export function StorageExplorer(props: DiagramNodeProps) {
  return <Shape {...STORAGE_EXPLORER} {...props} />
}
