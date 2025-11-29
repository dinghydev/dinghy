import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const FREE_SERVICES = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Free_Services.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 63,
}

export function FreeServices(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, FREE_SERVICES)} />
}
