import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const TABLE_29 = {
  _style: {
    entity:
      'shape=mxgraph.mockup.misc.progressBar;fillColor=#3384FF;strokeColor=none;fillColor2=#F2F2F2;barPos=80;sketch=1;hachureGap=4;pointerEvents=0;fontFamily=Architects Daughter;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DArchitects%2BDaughter;fontSize=20;',
  },
  _width: 14,
  _height: 230,
}

export function Table29(props: DiagramNodeProps) {
  return (
    <Shape {...TABLE_29} {...props} _style={extendStyle(TABLE_29, props)} />
  )
}
