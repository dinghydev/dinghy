import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ARRAY_MANAGER = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#434445;aspect=fixed;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.vvd.array_manager;',
  _width: 50,
  _height: 36.5,
}

export function ArrayManager(props: DiagramNodeProps) {
  return <Shape {...ARRAY_MANAGER} {...props} />
}
