import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const POWERFX = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/power_platform/PowerFx.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 64.92,
}

export function Powerfx(props: NodeProps) {
  return <Shape {...POWERFX} {...props} _style={extendStyle(POWERFX, props)} />
}
