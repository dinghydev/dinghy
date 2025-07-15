import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SELECT_BAR_2 = {
  _style:
    'html=1;strokeWidth=2;shadow=0;dashed=0;shape=mxgraph.ios7ui.selectBar;dx=120;dy=5;dx2=50;size=5;strokeColor=#ffffff;fillColor=#222222;gradientColor=none;sketch=0;hachureGap=4;pointerEvents=0;fontFamily=Architects Daughter;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DArchitects%2BDaughter;fontSize=20;',
  _width: 165,
  _height: 27,
}

export function SelectBar2(props: DiagramNodeProps) {
  return <Shape {...SELECT_BAR_2} {...props} />
}
