import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PRINT_SERVER = {
  _style:
    'image;html=1;image=img/lib/clip_art/networking/Print_Server_128x128.png',
  _width: 80,
  _height: 80,
}

export function PrintServer(props: DiagramNodeProps) {
  return <Shape {...PRINT_SERVER} {...props} />
}
