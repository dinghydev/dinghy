import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PROPERTY = {
  _style: {
    entity:
      'shape=rect;html=1;strokeWidth=2;whiteSpace=wrap;recursiveResize=0;',
  },
  _original_width: 0,
  _original_height: 120,
}

export function Property(props: DiagramNodeProps) {
  return (
    <Shape {...PROPERTY} {...props} _style={extendStyle(PROPERTY, props)} />
  )
}
