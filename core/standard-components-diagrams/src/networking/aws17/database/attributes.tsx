import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ATTRIBUTES = {
  _style:
    'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.attributes;fillColor=#2E73B8;gradientColor=none;',
  _width: 63,
  _height: 66,
}

export function Attributes(props: DiagramNodeProps) {
  return <Shape {...ATTRIBUTES} {...props} />
}
