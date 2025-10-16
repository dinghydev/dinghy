import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const TABLE_34 = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;shape=mxgraph.atlassian.checkbox;fillColor=#008465;strokeColor=none;fontColor=#ffffff;align=center;verticalAlign=middle;whiteSpace=wrap;fontSize=10;fontStyle=0;html=1;sketch=0;hachureGap=4;pointerEvents=0;fontFamily=Architects Daughter;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DArchitects%2BDaughter;',
  },
  _width: 44,
  _height: 230,
}

export function Table34(props: DiagramNodeProps) {
  return (
    <Shape {...TABLE_34} {...props} _style={extendStyle(TABLE_34, props)} />
  )
}
