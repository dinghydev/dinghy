import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SINGLE_SELECT = {
  _style: {
    entity:
      'html=1;rounded=1;fillColor=#ffffff;strokeColor=#DFE1E5;fontSize=12;align=left;fontColor=#000000;shadow=1;arcSize=1;whiteSpace=wrap;spacing=2;verticalAlign=top;fontStyle=0;spacingLeft=20;spacingTop=15;sketch=1;hachureGap=4;pointerEvents=0;fontFamily=Architects Daughter;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DArchitects%2BDaughter;',
  },
  _width: 2,
  _height: 320,
}

export function SingleSelect(props: DiagramNodeProps) {
  return (
    <Shape
      {...SINGLE_SELECT}
      {...props}
      _style={extendStyle(SINGLE_SELECT, props)}
    />
  )
}
