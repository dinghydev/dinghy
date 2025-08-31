import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VIRTUAL_WANS = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Virtual_WANs.svg;strokeColor=none;',
  },
  _width: 60,
  _height: 60,
}

export function VirtualWans(props: DiagramNodeProps) {
  return (
    <Shape
      {...VIRTUAL_WANS}
      {...props}
      _style={extendStyle(VIRTUAL_WANS, props)}
    />
  )
}
