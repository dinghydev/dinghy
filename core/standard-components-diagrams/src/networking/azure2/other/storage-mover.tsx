import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const STORAGE_MOVER = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Azure_Storage_Mover.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 66.88,
}

export function StorageMover(props: DiagramNodeProps) {
  return (
    <Shape
      {...STORAGE_MOVER}
      {...props}
      _style={extendStyle(STORAGE_MOVER, props)}
    />
  )
}
