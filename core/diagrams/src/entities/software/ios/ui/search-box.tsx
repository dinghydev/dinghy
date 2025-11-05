import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SEARCH_BOX = {
  _style: {
    entity: 'shape=rect;fillColor=#e0e0e0;strokeColor=none;',
  },
  _width: 0,
  _height: 20,
}

export function SearchBox(props: NodeProps) {
  return (
    <Shape {...SEARCH_BOX} {...props} _style={extendStyle(SEARCH_BOX, props)} />
  )
}
