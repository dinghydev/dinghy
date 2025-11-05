import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const VIRTUAL_WANS = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Virtual_WANs.svg;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 50,
}

export function VirtualWans(props: NodeProps) {
  return (
    <Shape
      {...VIRTUAL_WANS}
      {...props}
      _style={extendStyle(VIRTUAL_WANS, props)}
    />
  )
}
