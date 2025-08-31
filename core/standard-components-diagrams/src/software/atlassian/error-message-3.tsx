import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ERROR_MESSAGE_3 = {
  _style: {
    entity:
      'rounded=1;fillColor=#ffffff;strokeColor=#DFE1E5;shadow=1;arcSize=1;fontSize=12;fontColor=#596780;align=center;html=1;verticalAlign=top;spacingTop=5;sketch=1;hachureGap=4;pointerEvents=0;fontFamily=Architects Daughter;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DArchitects%2BDaughter;',
  },
  _width: 2,
  _height: 150,
}

export function ErrorMessage3(props: DiagramNodeProps) {
  return (
    <Shape
      {...ERROR_MESSAGE_3}
      {...props}
      _style={extendStyle(ERROR_MESSAGE_3, props)}
    />
  )
}
