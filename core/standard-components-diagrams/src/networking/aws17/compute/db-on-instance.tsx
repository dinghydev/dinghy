import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DB_ON_INSTANCE = {
  _style:
    'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.db_on_instance;fillColor=#F58534;gradientColor=none;',
  _width: 60,
  _height: 64.5,
}

export function DbOnInstance(props: DiagramNodeProps) {
  return <Shape {...DB_ON_INSTANCE} {...props} />
}
