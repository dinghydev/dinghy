import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const TEXTBOX = {
  _style: {
    entity: 'text;html=1;whiteSpace=wrap;overflow=hidden;rounded=0;',
  },
  _original_width: 180,
  _original_height: 120,
}

export function Textbox(props: DiagramNodeProps) {
  return <Shape {...TEXTBOX} {...props} _style={extendStyle(TEXTBOX, props)} />
}
