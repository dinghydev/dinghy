import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TECH_MAN = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/people/Tech_Man_128x128.pngstrokeColor=none;',
  },
  _width: 60,
  _height: 60,
}

export function TechMan(props: DiagramNodeProps) {
  return (
    <Shape {...TECH_MAN} {...props} _style={extendStyle(TECH_MAN, props)} />
  )
}
