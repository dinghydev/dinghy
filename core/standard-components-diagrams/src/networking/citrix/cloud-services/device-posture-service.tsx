import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DEVICE_POSTURE_SERVICE = {
  _style: {
    entity:
      'sketch=0;verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;fillColor=#000000;align=center;outlineConnect=0;pointerEvents=1;shape=mxgraph.citrix2.device_posture_service;',
  },
  _width: 50,
  _height: 42.015,
}

export function DevicePostureService(props: DiagramNodeProps) {
  return (
    <Shape
      {...DEVICE_POSTURE_SERVICE}
      {...props}
      _style={extendStyle(DEVICE_POSTURE_SERVICE, props)}
    />
  )
}
