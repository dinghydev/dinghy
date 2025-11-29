import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const RTC_REAL_TIME_COMMUNICATION = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.rtc_real-time_communication;',
  },
  _original_width: 52.5,
  _original_height: 52.8,
}

export function RtcRealTimeCommunication(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, RTC_REAL_TIME_COMMUNICATION)}
    />
  )
}
