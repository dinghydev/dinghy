import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const POWERFX = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/power_platform/PowerFx.svg;strokeColor=none;',
  },
  _width: 68,
  _height: 64.92,
}

export function Powerfx(props: DiagramNodeProps) {
  return <Shape {...POWERFX} {...props} _style={extendStyle(POWERFX, props)} />
}
