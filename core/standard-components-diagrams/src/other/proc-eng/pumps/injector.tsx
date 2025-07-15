import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const INJECTOR = {
  _style:
    'shape=mxgraph.pid.pumps.injector;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  _width: 80,
  _height: 40,
}

export function Injector(props: DiagramNodeProps) {
  return <Shape {...INJECTOR} {...props} />
}
