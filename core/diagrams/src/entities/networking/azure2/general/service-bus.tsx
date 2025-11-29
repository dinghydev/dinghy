import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SERVICE_BUS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Service_Bus.svg;strokeColor=none;',
  },
  _original_width: 70,
  _original_height: 60,
}

export function ServiceBus(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, SERVICE_BUS)} />
}
