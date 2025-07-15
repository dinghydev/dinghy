import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const USER_FEEDBACK = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.user_feedback_01;',
  _width: 47.400000000000006,
  _height: 47.400000000000006,
}

export function UserFeedback(props: DiagramNodeProps) {
  return <Shape {...USER_FEEDBACK} {...props} />
}
