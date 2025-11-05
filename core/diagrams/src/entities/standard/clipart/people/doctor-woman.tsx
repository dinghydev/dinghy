import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DOCTOR_WOMAN = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/people/Doctor_Woman_128x128.pngstrokeColor=none;',
  },
  _original_width: 80,
  _original_height: 80,
}

export function DoctorWoman(props: NodeProps) {
  return (
    <Shape
      {...DOCTOR_WOMAN}
      {...props}
      _style={extendStyle(DOCTOR_WOMAN, props)}
    />
  )
}
