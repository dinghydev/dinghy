import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const BUTTON_SPLIT = {
  _style: {
    entity:
      'rounded=1;fillColor=#F1F2F4;strokeColor=none;html=1;fontColor=#596780;align=left;fontSize=12;spacingLeft=10;sketch=1;hachureGap=4;pointerEvents=0;fontFamily=Architects Daughter;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DArchitects%2BDaughter;whiteSpace=wrap;',
  },
  _width: 80,
  _height: 33,
}

export function ButtonSplit(props: DiagramNodeProps) {
  return (
    <Shape
      {...BUTTON_SPLIT}
      {...props}
      _style={extendStyle(BUTTON_SPLIT, props)}
    />
  )
}
