import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SEARCH_BOX = {
  _style: 'shape=rect;fillColor=#e0e0e0;strokeColor=none;',
  _width: 0,
  _height: 20,
}

export function SearchBox(props: DiagramNodeProps) {
  return (
    <Shape {...SEARCH_BOX} {...props} _style={extendStyle(SEARCH_BOX, props)} />
  )
}
