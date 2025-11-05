import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TEXTBOX = {
  _style: {
    entity: 'text;html=1;whiteSpace=wrap;overflow=hidden;rounded=0;',
  },
  _width: 180,
  _height: 120,
}

export function Textbox(props: NodeProps) {
  return <Shape {...TEXTBOX} {...props} _style={extendStyle(TEXTBOX, props)} />
}
