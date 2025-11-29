import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DEDICATED_HSM = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Dedicated_HSM.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 62,
}

export function DedicatedHsm(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, DEDICATED_HSM)} />
}
