import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MESSAGE_DIALOG = {
  _style:
    'dashed=0;shape=rect;fillColor=#ffffff;strokeColor=#eeeeee;shadow=1;whiteSpace=wrap;html=1;',
  _width: 480,
  _height: 480,
}

export function MessageDialog(props: DiagramNodeProps) {
  return (
    <Shape
      {...MESSAGE_DIALOG}
      {...props}
      _style={extendStyle(MESSAGE_DIALOG, props)}
    />
  )
}
