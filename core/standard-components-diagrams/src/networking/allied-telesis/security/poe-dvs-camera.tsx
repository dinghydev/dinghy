import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const POE_DVS_CAMERA = {
  _style:
    'image;points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;image=img/lib/allied_telesis/security/POE_DVS_Camera.svg;',
  _width: 51,
  _height: 40.2,
}

export function PoeDvsCamera(props: DiagramNodeProps) {
  return <Shape {...POE_DVS_CAMERA} {...props} />
}
