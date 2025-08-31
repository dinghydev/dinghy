import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ALEXA_ENABLED_DEVICE = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.alexa_enabled_device;fillColor=#5294CF;gradientColor=none;',
  },
  _width: 60,
  _height: 60,
}

export function AlexaEnabledDevice(props: DiagramNodeProps) {
  return (
    <Shape
      {...ALEXA_ENABLED_DEVICE}
      {...props}
      _style={extendStyle(ALEXA_ENABLED_DEVICE, props)}
    />
  )
}
