import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const STORAGE_CONTAINER = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Storage_Container.svg;strokeColor=none;',
  },
  _original_width: 64,
  _original_height: 52,
}

export function StorageContainer(props: DiagramNodeProps) {
  return (
    <Shape
      {...STORAGE_CONTAINER}
      {...props}
      _style={extendStyle(STORAGE_CONTAINER, props)}
    />
  )
}
