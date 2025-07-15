import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CLOUD_DIGITAL_INTERFACE = {
  _style:
    'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#ED7100;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.cloud_digital_interface;',
  _width: 78,
  _height: 78,
}

export function CloudDigitalInterface(props: DiagramNodeProps) {
  return <Shape {...CLOUD_DIGITAL_INTERFACE} {...props} />
}
