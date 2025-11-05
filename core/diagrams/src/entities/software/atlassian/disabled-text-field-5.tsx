import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DISABLED_TEXT_FIELD_5 = {
  _style: {
    entity:
      'fillColor=#CCE0FF;strokeColor=none;html=1;fontSize=11;align=center;fontColor=#4C9AFF;fontStyle=1;fontSize=11;rounded=1;sketch=1;hachureGap=4;pointerEvents=0;fontFamily=Architects Daughter;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DArchitects%2BDaughter;',
  },
  _width: 5,
  _height: 543,
}

export function DisabledTextField5(props: NodeProps) {
  return (
    <Shape
      {...DISABLED_TEXT_FIELD_5}
      {...props}
      _style={extendStyle(DISABLED_TEXT_FIELD_5, props)}
    />
  )
}
