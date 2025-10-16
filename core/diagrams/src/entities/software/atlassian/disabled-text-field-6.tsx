import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DISABLED_TEXT_FIELD_6 = {
  _style: {
    entity:
      'rounded=1;arcSize=4;fillColor=#F7F8F9;align=left;spacingLeft=5;strokeColor=#DEE1E6;html=1;strokeWidth=2;fontColor=#596780;fontSize=12;verticalAlign=top;sketch=1;hachureGap=4;pointerEvents=0;fontFamily=Architects Daughter;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DArchitects%2BDaughter;',
  },
  _width: 8,
  _height: 543,
}

export function DisabledTextField6(props: DiagramNodeProps) {
  return (
    <Shape
      {...DISABLED_TEXT_FIELD_6}
      {...props}
      _style={extendStyle(DISABLED_TEXT_FIELD_6, props)}
    />
  )
}
