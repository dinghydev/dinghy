import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TEXTBOX = {
  _style: {
    entity: 'text;html=1;whiteSpace=wrap;overflow=hidden;rounded=0;',
  },
  _width: 180,
  _height: 120,
}

export function Textbox(props: DiagramNodeProps) {
  return <Shape {...TEXTBOX} {...props} _style={extendStyle(TEXTBOX, props)} />
}
