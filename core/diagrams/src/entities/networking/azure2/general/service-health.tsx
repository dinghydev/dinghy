import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SERVICE_HEALTH = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Service_Health.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 64,
}

export function ServiceHealth(props: NodeProps) {
  return (
    <Shape
      {...SERVICE_HEALTH}
      {...props}
      _style={extendStyle(SERVICE_HEALTH, props)}
    />
  )
}
