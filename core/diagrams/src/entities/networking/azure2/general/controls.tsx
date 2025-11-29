import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CONTROLS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Controls.svg;strokeColor=none;',
  },
  _original_width: 56.00000000000001,
  _original_height: 69,
}

export function Controls(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, CONTROLS)} />
}
