import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CONTENT_MODERATORS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/ai_machine_learning/Content_Moderators.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 62.8,
}

export function ContentModerators(props: NodeProps) {
  return (
    <Shape
      {...CONTENT_MODERATORS}
      {...props}
      _style={extendStyle(CONTENT_MODERATORS, props)}
    />
  )
}
