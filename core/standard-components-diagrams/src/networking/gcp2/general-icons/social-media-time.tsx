import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SOCIAL_MEDIA_TIME = {
  _style:
    'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;fillColor=#3B8DF1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.social_media_time',
  _width: 97,
  _height: 100,
}

export function SocialMediaTime(props: DiagramNodeProps) {
  return (
    <Shape
      {...SOCIAL_MEDIA_TIME}
      {...props}
      _style={extendStyle(SOCIAL_MEDIA_TIME, props)}
    />
  )
}
