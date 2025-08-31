import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const STORAGE_ACTIONS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Storage_Actions.svg;strokeColor=none;',
  },
  _width: 60,
  _height: 60,
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
