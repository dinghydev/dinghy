import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PARAGRAPH_OF_TEXT = {
  _style: {
    entity:
      'text;spacingTop=-5;whiteSpace=wrap;html=1;align=left;fontSize=12;fontFamily=Helvetica;fillColor=none;strokeColor=none;',
  },
  _width: 250,
  _height: 470,
}

export function ParagraphOfText(props: DiagramNodeProps) {
  return (
    <Shape
      {...PARAGRAPH_OF_TEXT}
      {...props}
      _style={extendStyle(PARAGRAPH_OF_TEXT, props)}
    />
  )
}
