import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const POWER_UP = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Power_Up.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
}

export function PowerUp(props: DiagramNodeProps) {
  return (
    <Shape {...POWER_UP} {...props} _style={extendStyle(POWER_UP, props)} />
  )
}
