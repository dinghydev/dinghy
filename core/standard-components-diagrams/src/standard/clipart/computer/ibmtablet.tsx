import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const IBMTABLET = {
  _style:
    'image;html=1;image=img/lib/clip_art/computers/IBM_Tablet_128x128.png',
  _width: 80,
  _height: 80,
}

export function Ibmtablet(props: DiagramNodeProps) {
  return <Shape {...IBMTABLET} {...props} />
}
