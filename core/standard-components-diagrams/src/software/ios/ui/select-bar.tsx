import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SELECT_BAR = {
  _style: {
    entity:
      'html=1;strokeWidth=2;shadow=0;dashed=0;shape=mxgraph.ios7ui.selectBar;dx=120;dy=5;dx2=75;size=5;strokeColor=#ffffff;fillColor=#222222;gradientColor=none;sketch=0;hachureGap=4;pointerEvents=0;fontFamily=Architects Daughter;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DArchitects%2BDaughter;fontSize=20;',
  },
  _original_width: 165,
  _original_height: 27,
}

export function SelectBar(props: DiagramNodeProps) {
  return (
    <Shape {...SELECT_BAR} {...props} _style={extendStyle(SELECT_BAR, props)} />
  )
}
