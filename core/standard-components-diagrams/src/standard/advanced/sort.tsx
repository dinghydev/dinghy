import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SORT = {
  _style: 'shape=sortShape;perimeter=rhombusPerimeter;whiteSpace=wrap;html=1;',
  _width: 60,
  _height: 60,
}

export function Sort(props: DiagramNodeProps) {
  return <Shape {...SORT} {...props} _style={extendStyle(SORT, props)} />
}
