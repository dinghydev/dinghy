import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const QUICKSTART_CENTER = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Quickstart_Center.svg;strokeColor=none;',
  _width: 60,
  _height: 60,
}

export function QuickstartCenter(props: DiagramNodeProps) {
  return (
    <Shape
      {...QUICKSTART_CENTER}
      {...props}
      _style={extendStyle(QUICKSTART_CENTER, props)}
    />
  )
}
