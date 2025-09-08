import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const VIRTUAL_MACHINE = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/computers/Virtual_Machine_128x128.pngstrokeColor=none;',
  },
  _original_width: 80,
  _original_height: 80,
}

export function VirtualMachine(props: DiagramNodeProps) {
  return (
    <Shape
      {...VIRTUAL_MACHINE}
      {...props}
      _style={extendStyle(VIRTUAL_MACHINE, props)}
    />
  )
}
