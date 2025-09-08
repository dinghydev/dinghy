import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ONSMQTT_MICRO_MESSAGE_QUEUING_TELEMETRY_TRANSPORT = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.onsmqtt_micro_message_queuing_telemetry_transport;',
  },
  _original_width: 54.900000000000006,
  _original_height: 39.300000000000004,
}

export function OnsmqttMicroMessageQueuingTelemetryTransport(
  props: DiagramNodeProps,
) {
  return (
    <Shape
      {...ONSMQTT_MICRO_MESSAGE_QUEUING_TELEMETRY_TRANSPORT}
      {...props}
      _style={extendStyle(
        ONSMQTT_MICRO_MESSAGE_QUEUING_TELEMETRY_TRANSPORT,
        props,
      )}
    />
  )
}
