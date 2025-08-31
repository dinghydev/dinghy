import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BUTTON_INFO_2 = {
  _style:
    'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.rrect;rSize=5;strokeColor=#1CA5B8;strokeWidth=1;fillColor=none;fontColor=#1CA5B8;whiteSpace=wrap;align=center;verticalAlign=middle;spacingLeft=0;fontStyle=0;fontSize=16;spacing=5;',
  _width: 50,
  _height: 40,
}

export function ButtonInfo2(props: DiagramNodeProps) {
  return (
    <Shape
      {...BUTTON_INFO_2}
      {...props}
      _style={extendStyle(BUTTON_INFO_2, props)}
    />
  )
}
