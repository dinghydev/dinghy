import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BATTERY = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/general/Battery_allstates_128x128.pngstrokeColor=none;',
  },
  _original_width: 80,
  _original_height: 80,
}

export function Battery(props: DiagramNodeProps) {
  return <Shape {...BATTERY} {...props} _style={extendStyle(BATTERY, props)} />
}
