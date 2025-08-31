import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const RTC_REAL_TIME_COMMUNICATION = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.rtc_real-time_communication;',
  },
  _width: 52.5,
  _height: 52.8,
}

export function RtcRealTimeCommunication(props: DiagramNodeProps) {
  return (
    <Shape
      {...RTC_REAL_TIME_COMMUNICATION}
      {...props}
      _style={extendStyle(RTC_REAL_TIME_COMMUNICATION, props)}
    />
  )
}
