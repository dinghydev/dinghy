import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const REKOGNITION = {
  _style:
    'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.rekognition;fillColor=#2E73B8;gradientColor=none;',
  _width: 76.5,
  _height: 93,
}

export function Rekognition(props: DiagramNodeProps) {
  return <Shape {...REKOGNITION} {...props} />
}
