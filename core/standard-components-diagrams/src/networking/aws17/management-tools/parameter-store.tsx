import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PARAMETER_STORE = {
  _style:
    'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.parameter_store;fillColor=#759C3E;gradientColor=none;',
  _width: 75,
  _height: 102,
}

export function ParameterStore(props: DiagramNodeProps) {
  return <Shape {...PARAMETER_STORE} {...props} />
}
