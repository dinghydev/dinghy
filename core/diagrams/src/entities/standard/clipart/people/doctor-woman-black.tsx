import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DOCTOR_WOMAN_BLACK = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/people/Doctor_Woman_Black_128x128.pngstrokeColor=none;',
  },
  _original_width: 80,
  _original_height: 80,
}

export function DoctorWomanBlack(props: NodeProps) {
  return (
    <Shape
      {...DOCTOR_WOMAN_BLACK}
      {...props}
      _style={extendStyle(DOCTOR_WOMAN_BLACK, props)}
    />
  )
}
