import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const POWERPLATFORM = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/power_platform/PowerPlatform.svg;strokeColor=none;',
  },
  _original_width: 64.32,
  _original_height: 68,
}

export function Powerplatform(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, POWERPLATFORM)} />
}
