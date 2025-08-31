import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TABLE_13 = {
  _style:
    'shape=mxgraph.arrows2.sharpArrow2;dy1=0.82;dx1=4.02;dx2=5.92;dy3=0.26;dx3=7.37;notch=0;strokeColor=none;fillColor=#C1C7D0;direction=east;sketch=1;hachureGap=4;pointerEvents=0;fontFamily=Architects Daughter;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DArchitects%2BDaughter;fontSize=20;',
  _width: 14,
  _height: 230,
}

export function Table13(props: DiagramNodeProps) {
  return (
    <Shape {...TABLE_13} {...props} _style={extendStyle(TABLE_13, props)} />
  )
}
