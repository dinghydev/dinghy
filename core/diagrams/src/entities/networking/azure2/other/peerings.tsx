import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PEERINGS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Peerings.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 57.92,
}

export function Peerings(props: NodeProps) {
  return (
    <Shape {...PEERINGS} {...props} _style={extendStyle(PEERINGS, props)} />
  )
}
