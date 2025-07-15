import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const IMAGE_VIDEO = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;strokeWidth=1;align=center;outlineConnect=0;dashed=0;outlineConnect=0;shape=mxgraph.aws3d.image;strokeColor=none;fillColor=#777777;aspect=fixed;',
  _width: 50,
  _height: 86,
}

export function ImageVideo(props: DiagramNodeProps) {
  return <Shape {...IMAGE_VIDEO} {...props} />
}
