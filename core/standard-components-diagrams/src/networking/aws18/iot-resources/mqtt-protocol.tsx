import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MQTT_PROTOCOL = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;strokeColor=#232F3E;fillColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.mqtt_protocol;',
  },
  _width: 60,
  _height: 60,
}

export function MqttProtocol(props: DiagramNodeProps) {
  return (
    <Shape
      {...MQTT_PROTOCOL}
      {...props}
      _style={extendStyle(MQTT_PROTOCOL, props)}
    />
  )
}
