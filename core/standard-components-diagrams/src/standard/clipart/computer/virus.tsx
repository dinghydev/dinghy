import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VIRUS = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/computers/Virus_128x128.pngstrokeColor=none;',
  },
  _original_width: 80,
  _original_height: 80,
}

export function Virus(props: DiagramNodeProps) {
  return <Shape {...VIRUS} {...props} _style={extendStyle(VIRUS, props)} />
}
