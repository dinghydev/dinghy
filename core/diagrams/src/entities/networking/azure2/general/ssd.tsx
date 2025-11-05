import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SSD = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/SSD.svg;strokeColor=none;',
  },
  _original_width: 66,
  _original_height: 60,
}

export function Ssd(props: NodeProps) {
  return <Shape {...SSD} {...props} _style={extendStyle(SSD, props)} />
}
