import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const COMPONENT_6700_SERIES = {
  _style:
    'shape=mxgraph.cisco.misc.6700_series;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  _width: 64,
  _height: 64,
}

export function Component6700Series(props: DiagramNodeProps) {
  return <Shape {...COMPONENT_6700_SERIES} {...props} />
}
