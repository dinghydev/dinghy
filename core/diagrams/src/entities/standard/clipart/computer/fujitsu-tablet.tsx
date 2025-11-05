import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const FUJITSU_TABLET = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/computers/Fujitsu_Tablet_128x128.pngstrokeColor=none;',
  },
  _original_width: 80,
  _original_height: 80,
}

export function FujitsuTablet(props: NodeProps) {
  return (
    <Shape
      {...FUJITSU_TABLET}
      {...props}
      _style={extendStyle(FUJITSU_TABLET, props)}
    />
  )
}
