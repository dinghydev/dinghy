import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const POE_DVS_CAMERA = {
  _style: {
    entity:
      'image;points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;image=img/lib/allied_telesis/security/POE_DVS_Camera.svg;strokeColor=none;',
  },
  _original_width: 51,
  _original_height: 40.2,
}

export function PoeDvsCamera(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, POE_DVS_CAMERA)} />
}
