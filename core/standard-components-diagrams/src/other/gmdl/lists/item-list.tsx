import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ITEM_LIST = {
  _style: {
    entity: 'shape=rect;strokeColor=#eeeeee;fillColor=#ffffff;shadow=1;',
  },
  _width: 152,
  _height: 631,
}

export function ItemList(props: DiagramNodeProps) {
  return (
    <Shape {...ITEM_LIST} {...props} _style={extendStyle(ITEM_LIST, props)} />
  )
}
