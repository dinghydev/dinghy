import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const VIRTUAL_WANS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/networking/Virtual_WANs.svg;strokeColor=none;',
  },
  _original_width: 65,
  _original_height: 64,
}

export function VirtualWans(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, VIRTUAL_WANS)} />
}
