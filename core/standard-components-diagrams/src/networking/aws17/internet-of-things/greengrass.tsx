import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const GREENGRASS = {
  _style:
    'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.greengrass;fillColor=#5294CF;gradientColor=none;',
  _width: 76.5,
  _height: 93,
}

export function Greengrass(props: DiagramNodeProps) {
  return <Shape {...GREENGRASS} {...props} />
}
