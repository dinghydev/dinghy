import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SEARCH_BOX_2 = {
  _style: {
    entity: 'shape=rect;fillColor=#F6F6F6;strokeColor=none;',
  },
  _width: 0,
  _height: 20,
}

export function SearchBox2(props: NodeProps) {
  return (
    <Shape
      {...SEARCH_BOX_2}
      {...props}
      _style={extendStyle(SEARCH_BOX_2, props)}
    />
  )
}
