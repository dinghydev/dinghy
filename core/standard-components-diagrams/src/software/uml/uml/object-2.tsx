import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const OBJECT_2 = {
  _style: {
    entity:
      'verticalAlign=top;align=left;overflow=fill;html=1;whiteSpace=wrap;',
  },
  _original_width: 160,
  _original_height: 90,
}

export function Object2(props: DiagramNodeProps) {
  return (
    <Shape {...OBJECT_2} {...props} _style={extendStyle(OBJECT_2, props)} />
  )
}
