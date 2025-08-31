import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BLUETOOTH = {
  _style:
    'image;html=1;image=img/lib/clip_art/general/Bluetooth_128x128.pngstrokeColor=none;',
  _width: 60,
  _height: 60,
}

export function Bluetooth(props: DiagramNodeProps) {
  return (
    <Shape {...BLUETOOTH} {...props} _style={extendStyle(BLUETOOTH, props)} />
  )
}
