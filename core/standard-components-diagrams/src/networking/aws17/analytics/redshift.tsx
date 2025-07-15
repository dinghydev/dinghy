import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const REDSHIFT = {
  _style:
    'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.redshift;fillColor=#2E73B8;gradientColor=none;',
  _width: 67.5,
  _height: 75,
}

export function Redshift(props: DiagramNodeProps) {
  return <Shape {...REDSHIFT} {...props} />
}
