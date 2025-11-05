import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SONIC_DASH = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Sonic_Dash.svg;strokeColor=none;',
  },
  _original_width: 62,
  _original_height: 68,
}

export function SonicDash(props: NodeProps) {
  return (
    <Shape {...SONIC_DASH} {...props} _style={extendStyle(SONIC_DASH, props)} />
  )
}
