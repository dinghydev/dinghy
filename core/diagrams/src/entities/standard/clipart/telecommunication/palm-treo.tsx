import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PALM_TREO = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/telecommunication/Palm_Treo_128x128.pngstrokeColor=none;',
  },
  _original_width: 80,
  _original_height: 80,
}

export function PalmTreo(props: NodeProps) {
  return (
    <Shape {...PALM_TREO} {...props} _style={extendStyle(PALM_TREO, props)} />
  )
}
