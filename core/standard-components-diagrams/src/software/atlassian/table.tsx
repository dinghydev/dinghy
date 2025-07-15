import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TABLE = {
  _style:
    'shape=line;strokeWidth=2;html=1;strokeColor=#DFE1E5;resizeWidth=1;sketch=1;hachureGap=4;pointerEvents=0;fontFamily=Architects Daughter;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DArchitects%2BDaughter;fontSize=20;',
  _width: 2,
  _height: 230,
}

export function Table(props: DiagramNodeProps) {
  return <Shape {...TABLE} {...props} />
}
