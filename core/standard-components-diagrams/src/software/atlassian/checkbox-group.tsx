import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CHECKBOX_GROUP = {
  _style:
    'fillColor=none;strokeColor=none;fontSize=11;fontStyle=1;align=left;fontColor=#596780;sketch=0;hachureGap=4;pointerEvents=0;fontFamily=Architects Daughter;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DArchitects%2BDaughter;',
  _width: 150,
  _height: 173,
}

export function CheckboxGroup(props: DiagramNodeProps) {
  return <Shape {...CHECKBOX_GROUP} {...props} />
}
