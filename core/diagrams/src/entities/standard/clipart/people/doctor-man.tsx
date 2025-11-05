import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DOCTOR_MAN = {
  _style: {
    entity:
      'image;html=1;image=img/lib/clip_art/people/Doctor_Man_128x128.pngstrokeColor=none;',
  },
  _original_width: 80,
  _original_height: 80,
}

export function DoctorMan(props: NodeProps) {
  return (
    <Shape {...DOCTOR_MAN} {...props} _style={extendStyle(DOCTOR_MAN, props)} />
  )
}
