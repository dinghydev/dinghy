import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SOCIAL_MEDIA = {
  _style: {
    entity:
      'shape=mxgraph.networks2.icon;aspect=fixed;fillColor=#EDEDED;strokeColor=#000000;gradientColor=#5B6163;network2IconShadow=1;network2bgFillColor=none;network2Icon=mxgraph.networks2.social_media;network2IconYOffset=0.0153;network2IconW=1.02;network2IconH=0.932;',
  },
  _width: 51,
  _height: 46.6,
}

export function SocialMedia(props: DiagramNodeProps) {
  return (
    <Shape
      {...SOCIAL_MEDIA}
      {...props}
      _style={extendStyle(SOCIAL_MEDIA, props)}
    />
  )
}
