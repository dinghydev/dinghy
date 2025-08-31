import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const COMMUNITY_DISCUSSION = {
  _style:
    'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;spacingTop=3;image=img/lib/active_directory/community_discussion.svg;strokeColor=none;',
  _width: 50,
  _height: 45,
}

export function CommunityDiscussion(props: DiagramNodeProps) {
  return (
    <Shape
      {...COMMUNITY_DISCUSSION}
      {...props}
      _style={extendStyle(COMMUNITY_DISCUSSION, props)}
    />
  )
}
