import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const LOAD_BALANCING = {
  _style:
    'sketch=0;verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;fillColor=#000000;align=center;outlineConnect=0;pointerEvents=1;shape=mxgraph.citrix2.load_balancing;',
  _width: 96,
  _height: 20.13,
}

export function LoadBalancing(props: DiagramNodeProps) {
  return <Shape {...LOAD_BALANCING} {...props} />
}
