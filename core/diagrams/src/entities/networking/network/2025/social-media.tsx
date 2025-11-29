import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SOCIAL_MEDIA = {
  _style: {
    entity:
      'shape=mxgraph.networks2.icon;aspect=fixed;fillColor=#EDEDED;strokeColor=#000000;gradientColor=#5B6163;network2IconShadow=1;network2bgFillColor=none;network2Icon=mxgraph.networks2.social_media;network2IconYOffset=0.0153;network2IconW=1.02;network2IconH=0.932;',
  },
  _original_width: 51,
  _original_height: 46.6,
}

export function SocialMedia(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, SOCIAL_MEDIA)} />
}
