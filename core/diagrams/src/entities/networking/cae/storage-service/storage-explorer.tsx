import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const STORAGE_EXPLORER = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Storage_Explorer.svg;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 50,
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
