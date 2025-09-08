import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const GEAR = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Gear.svg;strokeColor=none;',
  },
  _original_width: 64,
  _original_height: 64,
}

export function Gear(props: DiagramNodeProps) {
  return <Shape {...GEAR} {...props} _style={extendStyle(GEAR, props)} />
}
