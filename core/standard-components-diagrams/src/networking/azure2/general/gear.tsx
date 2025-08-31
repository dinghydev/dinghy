import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const GEAR = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Gear.svg;strokeColor=none;',
  },
  _width: 60,
  _height: 60,
}

export function Gear(props: DiagramNodeProps) {
  return <Shape {...GEAR} {...props} _style={extendStyle(GEAR, props)} />
}
