import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const INJECTOR = {
  _style:
    'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.fittings.injector;',
  _width: 80,
  _height: 40,
}

export function Injector(props: DiagramNodeProps) {
  return <Shape {...INJECTOR} {...props} />
}
