import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TEXTBOX = {
  _style: 'text;html=1;whiteSpace=wrap;overflow=hidden;rounded=0;',
  _width: 180,
  _height: 120,
}

export function Textbox(props: DiagramNodeProps) {
  return <Shape {...TEXTBOX} {...props} />
}
