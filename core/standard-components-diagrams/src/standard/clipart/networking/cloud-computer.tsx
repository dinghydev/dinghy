import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CLOUD_COMPUTER = {
  _style:
    'image;html=1;image=img/lib/clip_art/networking/Cloud_Computer_128x128.pngstrokeColor=none;',
  _width: 60,
  _height: 60,
}

export function CloudComputer(props: DiagramNodeProps) {
  return (
    <Shape
      {...CLOUD_COMPUTER}
      {...props}
      _style={extendStyle(CLOUD_COMPUTER, props)}
    />
  )
}
