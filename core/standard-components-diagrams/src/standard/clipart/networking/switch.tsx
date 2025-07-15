import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SWITCH = {
  _style: 'image;html=1;image=img/lib/clip_art/networking/Switch_128x128.png',
  _width: 80,
  _height: 80,
}

export function Switch(props: DiagramNodeProps) {
  return <Shape {...SWITCH} {...props} />
}
