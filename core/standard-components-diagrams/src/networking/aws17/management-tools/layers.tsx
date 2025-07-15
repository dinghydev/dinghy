import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const LAYERS = {
  _style:
    'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.layers;fillColor=#759C3E;gradientColor=none;',
  _width: 81,
  _height: 79.5,
}

export function Layers(props: DiagramNodeProps) {
  return <Shape {...LAYERS} {...props} />
}
