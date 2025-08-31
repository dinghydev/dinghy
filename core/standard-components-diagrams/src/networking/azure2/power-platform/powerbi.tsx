import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const POWERBI = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/power_platform/PowerBI.svg;strokeColor=none;',
  },
  _width: 51,
  _height: 68,
}

export function Powerbi(props: DiagramNodeProps) {
  return <Shape {...POWERBI} {...props} _style={extendStyle(POWERBI, props)} />
}
