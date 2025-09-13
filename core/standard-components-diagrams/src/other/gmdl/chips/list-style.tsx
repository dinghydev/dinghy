import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const LIST_STYLE = {
  _style: {
    entity: 'dashed=0;shape=rect;fillColor=#ffffff;strokeColor=none;',
  },
  _width: 358,
  _height: 642,
}

export function ListStyle(props: DiagramNodeProps) {
  return (
    <Shape {...LIST_STYLE} {...props} _style={extendStyle(LIST_STYLE, props)} />
  )
}
