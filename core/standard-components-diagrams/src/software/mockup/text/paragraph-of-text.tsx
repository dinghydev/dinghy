import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PARAGRAPH_OF_TEXT = {
  _style:
    'text;spacingTop=-5;whiteSpace=wrap;html=1;align=left;fontSize=12;fontFamily=Helvetica;fillColor=none;strokeColor=none;',
  _width: 250,
  _height: 470,
}

export function ParagraphOfText(props: DiagramNodeProps) {
  return <Shape {...PARAGRAPH_OF_TEXT} {...props} />
}
