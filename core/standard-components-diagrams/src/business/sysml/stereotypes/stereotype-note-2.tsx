import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const STEREOTYPE_NOTE_2 = {
  _style: {
    entity: 'shape=rect;fontStyle=1;html=1;whiteSpace=wrap;align=center;',
  },
  _width: 1,
  _height: 150,
}

export function StereotypeNote2(props: DiagramNodeProps) {
  return (
    <Shape
      {...STEREOTYPE_NOTE_2}
      {...props}
      _style={extendStyle(STEREOTYPE_NOTE_2, props)}
    />
  )
}
