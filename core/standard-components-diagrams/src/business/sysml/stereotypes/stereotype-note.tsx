import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const STEREOTYPE_NOTE = {
  _style: {
    entity:
      'shape=note;size=15;spacingLeft=5;html=1;overflow=fill;whiteSpace=wrap;',
  },
  _original_width: 320,
  _original_height: 150,
}

export function StereotypeNote(props: DiagramNodeProps) {
  return (
    <Shape
      {...STEREOTYPE_NOTE}
      {...props}
      _style={extendStyle(STEREOTYPE_NOTE, props)}
    />
  )
}
