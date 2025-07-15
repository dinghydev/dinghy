import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const COVER_FLOW = {
  _style:
    'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;strokeWidth=1;shape=mxgraph.mockup.navigation.coverFlow;strokeColor=#999999;',
  _width: 400,
  _height: 200,
}

export function CoverFlow(props: DiagramNodeProps) {
  return <Shape {...COVER_FLOW} {...props} />
}
