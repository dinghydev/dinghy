import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DISABLED_TEXT_FIELD_8 = {
  _style: {
    entity:
      'fillColor=none;strokeColor=none;html=1;fontSize=11;fontStyle=0;align=left;fontColor=#172B4C;fontStyle=0;fontSize=12;sketch=1;hachureGap=4;pointerEvents=0;fontFamily=Architects Daughter;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DArchitects%2BDaughter;',
  },
  _width: 10,
  _height: 543,
}

export function DisabledTextField8(props: DiagramNodeProps) {
  return (
    <Shape
      {...DISABLED_TEXT_FIELD_8}
      {...props}
      _style={extendStyle(DISABLED_TEXT_FIELD_8, props)}
    />
  )
}
