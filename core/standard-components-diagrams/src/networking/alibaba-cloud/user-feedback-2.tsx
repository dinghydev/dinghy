import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const USER_FEEDBACK_2 = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.user_feedback_02;',
  },
  _original_width: 43.199999999999996,
  _original_height: 50.099999999999994,
}

export function UserFeedback2(props: DiagramNodeProps) {
  return (
    <Shape
      {...USER_FEEDBACK_2}
      {...props}
      _style={extendStyle(USER_FEEDBACK_2, props)}
    />
  )
}
