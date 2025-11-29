import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DVS_SURVEILLANCE_MONITOR = {
  _style: {
    entity:
      'image;points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;image=img/lib/allied_telesis/security/DVS_Surveillance_Monitor.svg;strokeColor=none;',
  },
  _original_width: 42,
  _original_height: 60,
}

export function DvsSurveillanceMonitor(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, DVS_SURVEILLANCE_MONITOR)} />
  )
}
