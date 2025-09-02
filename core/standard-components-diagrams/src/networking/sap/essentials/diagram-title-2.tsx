import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DIAGRAM_TITLE_2 = {
  _style: {
    entity:
      'text;html=1;align=left;verticalAlign=middle;whiteSpace=wrap;rounded=0;',
  },
  _original_width: 500,
  _original_height: 50,
}

export function DiagramTitle2(props: DiagramNodeProps) {
  return (
    <Shape
      {...DIAGRAM_TITLE_2}
      {...props}
      _style={extendStyle(DIAGRAM_TITLE_2, props)}
    />
  )
}
