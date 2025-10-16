import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const STORAGE_ACTIONS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Storage_Actions.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
}

export function StorageActions(props: DiagramNodeProps) {
  return (
    <Shape
      {...STORAGE_ACTIONS}
      {...props}
      _style={extendStyle(STORAGE_ACTIONS, props)}
    />
  )
}
