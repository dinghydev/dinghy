import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TEXT_FIELD_WITH_TOOLTIP_3 = {
  _style:
    'fillColor=none;strokeColor=none;html=1;fontSize=11;align=left;fontColor=#596780;fontStyle=1;fontSize=11;sketch=1;hachureGap=4;pointerEvents=0;fontFamily=Architects Daughter;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DArchitects%2BDaughter;',
  _width: 480,
  _height: 80,
}

export function TextFieldWithTooltip3(props: DiagramNodeProps) {
  return <Shape {...TEXT_FIELD_WITH_TOOLTIP_3} {...props} />
}
