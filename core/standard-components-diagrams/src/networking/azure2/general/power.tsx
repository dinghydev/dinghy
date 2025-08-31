import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const POWER = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Power.svg;strokeColor=none;',
  _width: 44,
  _height: 68,
}

export function Power(props: DiagramNodeProps) {
  return <Shape {...POWER} {...props} _style={extendStyle(POWER, props)} />
}
