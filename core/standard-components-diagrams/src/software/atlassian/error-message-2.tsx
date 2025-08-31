import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ERROR_MESSAGE_2 = {
  _style:
    'rounded=1;arcSize=9;fillColor=#ffffff;strokeColor=#4C9AFF;html=1;strokeWidth=2;spacingLeft=5;fontColor=#000000;align=left;sketch=1;hachureGap=4;pointerEvents=0;fontFamily=Architects Daughter;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DArchitects%2BDaughter;fontSize=20;',
  _width: 1,
  _height: 150,
}

export function ErrorMessage2(props: DiagramNodeProps) {
  return (
    <Shape
      {...ERROR_MESSAGE_2}
      {...props}
      _style={extendStyle(ERROR_MESSAGE_2, props)}
    />
  )
}
