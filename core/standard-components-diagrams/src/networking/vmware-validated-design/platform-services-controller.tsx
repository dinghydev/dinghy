import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PLATFORM_SERVICES_CONTROLLER = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#434445;aspect=fixed;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.vvd.platform_services_controller;',
  _width: 60,
  _height: 60,
}

export function PlatformServicesController(props: DiagramNodeProps) {
  return (
    <Shape
      {...PLATFORM_SERVICES_CONTROLLER}
      {...props}
      _style={extendStyle(PLATFORM_SERVICES_CONTROLLER, props)}
    />
  )
}
