import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CONTENT_SAFETY = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/ai_machine_learning/Content_Safety.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
}

export function ContentSafety(props: NodeProps) {
  return (
    <Shape
      {...CONTENT_SAFETY}
      {...props}
      _style={extendStyle(CONTENT_SAFETY, props)}
    />
  )
}
