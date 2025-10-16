import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const FIREWALLS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/networking/Firewalls.svg;strokeColor=none;',
  },
  _original_width: 71,
  _original_height: 60,
}

export function Firewalls(props: DiagramNodeProps) {
  return (
    <Shape {...FIREWALLS} {...props} _style={extendStyle(FIREWALLS, props)} />
  )
}
