import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TEMPERATURE_HUMIDITY_SENSOR = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#7AA116;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.iot_thing_temperature_humidity_sensor;',
  },
  _original_width: 78,
  _original_height: 78,
}

export function TemperatureHumiditySensor(props: DiagramNodeProps) {
  return (
    <Shape
      {...TEMPERATURE_HUMIDITY_SENSOR}
      {...props}
      _style={extendStyle(TEMPERATURE_HUMIDITY_SENSOR, props)}
    />
  )
}
