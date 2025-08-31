import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VIRTUAL_WANS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/networking/Virtual_WANs.svg;strokeColor=none;',
  _width: 65,
  _height: 64,
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
