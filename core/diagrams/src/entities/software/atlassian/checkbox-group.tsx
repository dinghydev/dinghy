import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CHECKBOX_GROUP = {
  _style: {
    entity:
      'fillColor=none;strokeColor=none;fontSize=11;fontStyle=1;align=left;fontColor=#596780;sketch=0;hachureGap=4;pointerEvents=0;fontFamily=Architects Daughter;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DArchitects%2BDaughter;',
  },
  _width: 150,
  _height: 173,
}

export function CheckboxGroup(props: DiagramNodeProps) {
  return (
    <Shape
      {...CHECKBOX_GROUP}
      {...props}
      _style={extendStyle(CHECKBOX_GROUP, props)}
    />
  )
}
