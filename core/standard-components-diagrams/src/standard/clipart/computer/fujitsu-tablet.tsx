import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FUJITSU_TABLET = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/computers/Fujitsu_Tablet_128x128.pngstrokeColor=none;',
  },
  _width: 60,
  _height: 60,
}

export function FujitsuTablet(props: DiagramNodeProps) {
  return (
    <Shape
      {...FUJITSU_TABLET}
      {...props}
      _style={extendStyle(FUJITSU_TABLET, props)}
    />
  )
}
