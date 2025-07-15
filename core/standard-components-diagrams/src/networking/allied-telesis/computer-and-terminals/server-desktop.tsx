import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SERVER_DESKTOP = {
  _style:
    'image;points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;image=img/lib/allied_telesis/computer_and_terminals/Server_Desktop.svg;',
  _width: 42.599999999999994,
  _height: 54,
}

export function ServerDesktop(props: DiagramNodeProps) {
  return <Shape {...SERVER_DESKTOP} {...props} />
}
