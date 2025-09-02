import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TECH_MAN = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/people/Tech_Man_128x128.pngstrokeColor=none;',
  },
  _original_width: 80,
  _original_height: 80,
}

export function TechMan(props: DiagramNodeProps) {
  return (
    <Shape {...TECH_MAN} {...props} _style={extendStyle(TECH_MAN, props)} />
  )
}
