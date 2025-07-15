import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const FUJITSU_TABLET = {
  _style:
    'image;html=1;image=img/lib/clip_art/computers/Fujitsu_Tablet_128x128.png',
  _width: 80,
  _height: 80,
}

export function FujitsuTablet(props: DiagramNodeProps) {
  return <Shape {...FUJITSU_TABLET} {...props} />
}
