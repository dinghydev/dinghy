import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DISABLED_TEXT_FIELD_3 = {
  _style:
    'fillColor=none;strokeColor=none;html=1;fontSize=11;fontStyle=0;align=left;fontColor=#172B4C;fontStyle=1;fontSize=18;sketch=1;hachureGap=4;pointerEvents=0;fontFamily=Architects Daughter;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DArchitects%2BDaughter;',
  _width: 370,
  _height: 543,
}

export function DisabledTextField3(props: DiagramNodeProps) {
  return (
    <Shape
      {...DISABLED_TEXT_FIELD_3}
      {...props}
      _style={extendStyle(DISABLED_TEXT_FIELD_3, props)}
    />
  )
}
