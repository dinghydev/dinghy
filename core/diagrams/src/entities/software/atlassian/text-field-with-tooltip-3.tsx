import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TEXT_FIELD_WITH_TOOLTIP_3 = {
  _style: {
    entity:
      'fillColor=none;strokeColor=none;html=1;fontSize=11;align=left;fontColor=#596780;fontStyle=1;fontSize=11;sketch=1;hachureGap=4;pointerEvents=0;fontFamily=Architects Daughter;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DArchitects%2BDaughter;',
  },
  _width: 480,
  _height: 80,
}

export function TextFieldWithTooltip3(props: NodeProps) {
  return (
    <Shape
      {...TEXT_FIELD_WITH_TOOLTIP_3}
      {...props}
      _style={extendStyle(TEXT_FIELD_WITH_TOOLTIP_3, props)}
    />
  )
}
