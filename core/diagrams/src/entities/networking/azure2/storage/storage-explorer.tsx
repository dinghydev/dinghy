import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const STORAGE_EXPLORER = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/storage/Storage_Explorer.svg;strokeColor=none;',
  },
  _original_width: 58.4,
  _original_height: 68,
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
