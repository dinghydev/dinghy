import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ONION = {
  _style:
    'ellipse;html=1;strokeWidth=4;fillColor=#F5AB50;strokeColor=#ffffff;shadow=0;fontSize=10;fontColor=#FFFFFF;align=center;fontStyle=0;whiteSpace=wrap;spacing=10;',
  _width: 0,
  _height: 350,
}

export function Onion(props: DiagramNodeProps) {
  return <Shape {...ONION} {...props} _style={extendStyle(ONION, props)} />
}
