import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const IOT_CORE_DEVICE_ADVISOR = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#7AA116;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.iot_core_device_advisor;',
  },
  _original_width: 77,
  _original_height: 78,
}

export function IotCoreDeviceAdvisor(props: DiagramNodeProps) {
  return (
    <Shape
      {...IOT_CORE_DEVICE_ADVISOR}
      {...props}
      _style={extendStyle(IOT_CORE_DEVICE_ADVISOR, props)}
    />
  )
}
