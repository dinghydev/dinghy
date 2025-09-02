import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TABLE_28 = {
  _style: {
    entity:
      'rounded=1;arcSize=23;fillColor=#42526E;strokeColor=none;sketch=0;hachureGap=4;pointerEvents=0;fontFamily=Architects Daughter;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DArchitects%2BDaughter;fontSize=20;',
  },
  _original_width: 12,
  _original_height: 230,
}

export function Table28(props: DiagramNodeProps) {
  return (
    <Shape {...TABLE_28} {...props} _style={extendStyle(TABLE_28, props)} />
  )
}
