import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CLOUD_COMPUTER = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/networking/Cloud_Computer_128x128.pngstrokeColor=none;',
  },
  _original_width: 80,
  _original_height: 80,
}

export function CloudComputer(props: NodeProps) {
  return (
    <Shape
      {...CLOUD_COMPUTER}
      {...props}
      _style={extendStyle(CLOUD_COMPUTER, props)}
    />
  )
}
