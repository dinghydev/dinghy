import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SERVICE_HEALTH = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/ServiceHealth.svg;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 44,
}

export function ServiceHealth(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, SERVICE_HEALTH)} />
}
