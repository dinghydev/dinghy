import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CHECK_AVAILABLE = {
  _style:
    'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;fillColor=#3B8DF1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.check_available',
  _width: 100,
  _height: 87,
}

export function CheckAvailable(props: DiagramNodeProps) {
  return <Shape {...CHECK_AVAILABLE} {...props} />
}
