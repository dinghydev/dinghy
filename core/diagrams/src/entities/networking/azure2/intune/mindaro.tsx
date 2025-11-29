import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MINDARO = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/intune/Mindaro.svg;strokeColor=none;',
  },
  _original_width: 67.2,
  _original_height: 68,
}

export function Mindaro(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, MINDARO)} />
}
