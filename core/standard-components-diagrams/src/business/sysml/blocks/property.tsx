import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PROPERTY = {
  _style: 'shape=rect;html=1;strokeWidth=2;whiteSpace=wrap;recursiveResize=0;',
  _width: 0,
  _height: 120,
}

export function Property(props: DiagramNodeProps) {
  return (
    <Shape {...PROPERTY} {...props} _style={extendStyle(PROPERTY, props)} />
  )
}
