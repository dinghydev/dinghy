import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ALEXA_ENABLED_DEVICE = {
  _style:
    'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.alexa_enabled_device;fillColor=#5294CF;gradientColor=none;',
  _width: 79.5,
  _height: 79.5,
}

export function AlexaEnabledDevice(props: DiagramNodeProps) {
  return <Shape {...ALEXA_ENABLED_DEVICE} {...props} />
}
