import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const WEDGE_BAR_2 = {
  _style:
    'strokeWidth=1;shadow=0;dashed=0;align=center;html=1;shape=mxgraph.mockup.forms.uRect;fontSize=17;fontColor=#ffffff;align=left;spacingLeft=5;strokeColor=#008cff;fillColor=#008cff;',
  _width: 1,
  _height: 30,
}

export function WedgeBar2(props: DiagramNodeProps) {
  return <Shape {...WEDGE_BAR_2} {...props} />
}
