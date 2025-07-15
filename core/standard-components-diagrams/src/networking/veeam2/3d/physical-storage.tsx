import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PHYSICAL_STORAGE = {
  _style:
    'sketch=0;shadow=0;dashed=0;html=1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.3d.physical_storage;',
  _width: 108,
  _height: 60,
}

export function PhysicalStorage(props: DiagramNodeProps) {
  return <Shape {...PHYSICAL_STORAGE} {...props} />
}
