import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TECH_MAN = {
  _style:
    'image;html=1;image=img/lib/clip_art/people/Tech_Man_128x128.pngstrokeColor=none;',
  _width: 80,
  _height: 80,
}

export function TechMan(props: DiagramNodeProps) {
  return <Shape {...TECH_MAN} {...props} />
}
