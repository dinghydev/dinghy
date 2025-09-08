import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const TABLE_25 = {
  _style: {
    entity:
      'strokeColor=none;fillColor=#FAFBFC;html=1;sketch=1;hachureGap=4;pointerEvents=0;fontFamily=Architects Daughter;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DArchitects%2BDaughter;fontSize=20;',
  },
  _original_width: 7,
  _original_height: 230,
}

export function Table25(props: DiagramNodeProps) {
  return (
    <Shape {...TABLE_25} {...props} _style={extendStyle(TABLE_25, props)} />
  )
}
