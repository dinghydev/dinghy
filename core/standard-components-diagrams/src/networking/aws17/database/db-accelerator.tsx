import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DB_ACCELERATOR = {
  _style:
    'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.db_accelerator;fillColor=#2E73B8;gradientColor=none;',
  _width: 72,
  _height: 81,
}

export function DbAccelerator(props: DiagramNodeProps) {
  return <Shape {...DB_ACCELERATOR} {...props} />
}
