import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DATE_PICKER = {
  _style: {
    entity:
      'fillColor=none;strokeColor=none;html=1;fontSize=11;fontStyle=0;align=left;fontColor=#596780;fontStyle=1;fontSize=11;sketch=1;hachureGap=4;pointerEvents=0;fontFamily=Architects Daughter;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DArchitects%2BDaughter;',
  },
  _width: 240,
  _height: 58,
}

export function DatePicker(props: NodeProps) {
  return (
    <Shape
      {...DATE_PICKER}
      {...props}
      _style={extendStyle(DATE_PICKER, props)}
    />
  )
}
