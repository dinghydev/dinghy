import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SURVEILLANCE_CAMERA_CEILING = {
  _style: {
    entity:
      'image;points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;image=img/lib/allied_telesis/security/Surveillance_Camera_Ceiling.svg;strokeColor=none;',
  },
  _original_width: 37.2,
  _original_height: 35.4,
}

export function SurveillanceCameraCeiling(props: DiagramNodeProps) {
  return (
    <Shape
      {...SURVEILLANCE_CAMERA_CEILING}
      {...props}
      _style={extendStyle(SURVEILLANCE_CAMERA_CEILING, props)}
    />
  )
}
