import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const IBMTABLET = {
  _style:
    'image;html=1;image=img/lib/clip_art/computers/IBM_Tablet_128x128.pngstrokeColor=none;',
  _width: 60,
  _height: 60,
}

export function Ibmtablet(props: DiagramNodeProps) {
  return (
    <Shape {...IBMTABLET} {...props} _style={extendStyle(IBMTABLET, props)} />
  )
}
