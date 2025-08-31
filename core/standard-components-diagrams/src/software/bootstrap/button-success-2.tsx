import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BUTTON_SUCCESS_2 = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.rrect;rSize=5;strokeColor=#33A64C;strokeWidth=1;fillColor=none;fontColor=#33A64C;whiteSpace=wrap;align=center;verticalAlign=middle;spacingLeft=0;fontStyle=0;fontSize=16;spacing=5;',
  },
  _width: 90,
  _height: 40,
}

export function ButtonSuccess2(props: DiagramNodeProps) {
  return (
    <Shape
      {...BUTTON_SUCCESS_2}
      {...props}
      _style={extendStyle(BUTTON_SUCCESS_2, props)}
    />
  )
}
