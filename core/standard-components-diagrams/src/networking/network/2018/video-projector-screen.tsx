import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const VIDEO_PROJECTOR_SCREEN = {
  _style:
    'fontColor=#0066CC;verticalAlign=top;verticalLabelPosition=bottom;labelPosition=center;align=center;html=1;outlineConnect=0;fillColor=#CCCCCC;strokeColor=#6881B3;gradientColor=none;gradientDirection=north;strokeWidth=2;shape=mxgraph.networks.video_projector_screen;',
  _width: 80,
  _height: 100,
}

export function VideoProjectorScreen(props: DiagramNodeProps) {
  return <Shape {...VIDEO_PROJECTOR_SCREEN} {...props} />
}
