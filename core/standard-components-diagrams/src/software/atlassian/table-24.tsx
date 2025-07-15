import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TABLE_24 = {
  _style:
    'html=1;fillColor=none;strokeColor=none;fontSize=11;align=center;fontColor=#596780;whiteSpace=wrap;sketch=1;hachureGap=4;pointerEvents=0;fontFamily=Architects Daughter;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DArchitects%2BDaughter;',
  _width: 4,
  _height: 230,
}

export function Table24(props: DiagramNodeProps) {
  return <Shape {...TABLE_24} {...props} />
}
