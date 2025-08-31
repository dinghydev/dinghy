import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DISABLED_TEXT_FIELD_4 = {
  _style: {
    entity:
      'fillColor=none;align=left;strokeColor=none;fontColor=#000000;fontSize=12;html=1;whiteSpace=wrap;verticalAlign=top;sketch=1;hachureGap=4;pointerEvents=0;fontFamily=Architects Daughter;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DArchitects%2BDaughter;',
  },
  _width: 1,
  _height: 543,
}

export function DisabledTextField4(props: DiagramNodeProps) {
  return (
    <Shape
      {...DISABLED_TEXT_FIELD_4}
      {...props}
      _style={extendStyle(DISABLED_TEXT_FIELD_4, props)}
    />
  )
}
