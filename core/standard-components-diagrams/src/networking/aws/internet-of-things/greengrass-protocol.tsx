import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const GREENGRASS_PROTOCOL = {
  _style:
    'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#7AA116;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.iot_greengrass_protocol;',
  _width: 78,
  _height: 78,
}

export function GreengrassProtocol(props: DiagramNodeProps) {
  return <Shape {...GREENGRASS_PROTOCOL} {...props} />
}
