import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DISABLED_TEXT_FIELD_7 = {
  _style: {
    entity:
      'fillColor=none;strokeColor=none;html=1;fontSize=11;fontStyle=0;align=left;fontColor=#172B4C;fontStyle=1;fontSize=14;sketch=1;hachureGap=4;pointerEvents=0;fontFamily=Architects Daughter;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DArchitects%2BDaughter;',
  },
  _width: 9,
  _height: 543,
}

export function DisabledTextField7(props: DiagramNodeProps) {
  return (
    <Shape
      {...DISABLED_TEXT_FIELD_7}
      {...props}
      _style={extendStyle(DISABLED_TEXT_FIELD_7, props)}
    />
  )
}
