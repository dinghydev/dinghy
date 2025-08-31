import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VIDEO_PROJECTOR = {
  _style:
    'shape=mxgraph.networks2.icon;aspect=fixed;fillColor=#EDEDED;strokeColor=#000000;gradientColor=#5B6163;network2IconShadow=1;network2bgFillColor=none;network2Icon=mxgraph.networks2.video_projector;network2IconYOffset=0.013;network2IconW=1;network2IconH=0.294;',
  _width: 50,
  _height: 14.7,
}

export function VideoProjector(props: DiagramNodeProps) {
  return (
    <Shape
      {...VIDEO_PROJECTOR}
      {...props}
      _style={extendStyle(VIDEO_PROJECTOR, props)}
    />
  )
}
