import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MAGNIFYING_GLASS = {
  _style:
    'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.magnifying_glass;pointerEvents=1;',
  _width: 55.2,
  _height: 54.4,
}

export function MagnifyingGlass(props: DiagramNodeProps) {
  return <Shape {...MAGNIFYING_GLASS} {...props} />
}
