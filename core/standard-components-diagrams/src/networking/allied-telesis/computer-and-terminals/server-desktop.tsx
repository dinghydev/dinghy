import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SERVER_DESKTOP = {
  _style: {
    entity:
      'image;points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;image=img/lib/allied_telesis/computer_and_terminals/Server_Desktop.svg;strokeColor=none;',
  },
  _original_width: 42.599999999999994,
  _original_height: 54,
}

export function ServerDesktop(props: DiagramNodeProps) {
  return (
    <Shape
      {...SERVER_DESKTOP}
      {...props}
      _style={extendStyle(SERVER_DESKTOP, props)}
    />
  )
}
