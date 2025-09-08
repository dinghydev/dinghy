import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DOCTOR_MAN_BLACK = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/people/Doctor_Man_Black_128x128.pngstrokeColor=none;',
  },
  _original_width: 80,
  _original_height: 80,
}

export function DoctorManBlack(props: DiagramNodeProps) {
  return (
    <Shape
      {...DOCTOR_MAN_BLACK}
      {...props}
      _style={extendStyle(DOCTOR_MAN_BLACK, props)}
    />
  )
}
