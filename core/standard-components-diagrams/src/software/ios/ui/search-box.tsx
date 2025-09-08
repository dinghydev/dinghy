import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SEARCH_BOX = {
  _style: {
    entity: 'shape=rect;fillColor=#e0e0e0;strokeColor=none;',
  },
  _original_width: 0,
  _original_height: 20,
}

export function SearchBox(props: DiagramNodeProps) {
  return (
    <Shape {...SEARCH_BOX} {...props} _style={extendStyle(SEARCH_BOX, props)} />
  )
}
