import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const STORAGE_EXPLORER = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Storage_Explorer.svg;strokeColor=none;',
  _width: 60,
  _height: 60,
}

export function StorageExplorer(props: DiagramNodeProps) {
  return (
    <Shape
      {...STORAGE_EXPLORER}
      {...props}
      _style={extendStyle(STORAGE_EXPLORER, props)}
    />
  )
}
