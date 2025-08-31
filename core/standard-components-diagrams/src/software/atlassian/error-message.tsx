import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ERROR_MESSAGE = {
  _style: {
    entity:
      'html=1;fillColor=none;strokeColor=none;fontSize=11;align=left;fontColor=#596780;whiteSpace=wrap;sketch=1;hachureGap=4;pointerEvents=0;fontFamily=Architects Daughter;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DArchitects%2BDaughter;',
  },
  _width: 340,
  _height: 150,
}

export function ErrorMessage(props: DiagramNodeProps) {
  return (
    <Shape
      {...ERROR_MESSAGE}
      {...props}
      _style={extendStyle(ERROR_MESSAGE, props)}
    />
  )
}
