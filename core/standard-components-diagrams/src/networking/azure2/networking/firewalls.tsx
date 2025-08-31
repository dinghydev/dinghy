import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FIREWALLS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/networking/Firewalls.svg;strokeColor=none;',
  },
  _width: 71,
  _height: 60,
}

export function Firewalls(props: DiagramNodeProps) {
  return (
    <Shape {...FIREWALLS} {...props} _style={extendStyle(FIREWALLS, props)} />
  )
}
