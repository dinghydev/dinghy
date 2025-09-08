import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SEARCH_BOX_2 = {
  _style: {
    entity: 'shape=rect;fillColor=#F6F6F6;strokeColor=none;',
  },
  _original_width: 0,
  _original_height: 20,
}

export function SearchBox2(props: DiagramNodeProps) {
  return (
    <Shape
      {...SEARCH_BOX_2}
      {...props}
      _style={extendStyle(SEARCH_BOX_2, props)}
    />
  )
}
