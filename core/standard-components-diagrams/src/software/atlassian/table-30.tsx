import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const TABLE_30 = {
  _style: {
    entity:
      'strokeColor=none;fillColor=none;fontSize=10;fontColor=#596780;align=left;html=1;sketch=1;hachureGap=4;pointerEvents=0;fontFamily=Architects Daughter;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DArchitects%2BDaughter;',
  },
  _original_width: 15,
  _original_height: 230,
}

export function Table30(props: DiagramNodeProps) {
  return (
    <Shape {...TABLE_30} {...props} _style={extendStyle(TABLE_30, props)} />
  )
}
