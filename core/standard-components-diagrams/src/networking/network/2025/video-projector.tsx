import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const VIDEO_PROJECTOR = {
  _style: {
    entity:
      'shape=mxgraph.networks2.icon;aspect=fixed;fillColor=#EDEDED;strokeColor=#000000;gradientColor=#5B6163;network2IconShadow=1;network2bgFillColor=none;network2Icon=mxgraph.networks2.video_projector;network2IconYOffset=0.013;network2IconW=1;network2IconH=0.294;',
  },
  _original_width: 50,
  _original_height: 14.7,
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
