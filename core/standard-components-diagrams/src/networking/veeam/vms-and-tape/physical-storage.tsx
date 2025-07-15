import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PHYSICAL_STORAGE = {
  _style:
    'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.2d.physical_storage;',
  _width: 59.2,
  _height: 20,
}

export function PhysicalStorage(props: DiagramNodeProps) {
  return <Shape {...PHYSICAL_STORAGE} {...props} />
}
