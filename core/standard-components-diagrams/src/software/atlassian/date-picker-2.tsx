import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DATE_PICKER_2 = {
  _style:
    'rounded=1;arcSize=9;fillColor=#F7F8F9;align=left;spacingLeft=5;strokeColor=#DEE1E6;html=1;strokeWidth=2;fontColor=#596780;fontSize=12;sketch=1;hachureGap=4;pointerEvents=0;fontFamily=Architects Daughter;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DArchitects%2BDaughter;',
  _width: 1,
  _height: 58,
}

export function DatePicker2(props: DiagramNodeProps) {
  return <Shape {...DATE_PICKER_2} {...props} />
}
