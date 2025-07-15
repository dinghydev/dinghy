import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ALEXA_VOICE_SERVICE = {
  _style:
    'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.alexa_voice_service;fillColor=#5294CF;gradientColor=none;',
  _width: 60,
  _height: 63,
}

export function AlexaVoiceService(props: DiagramNodeProps) {
  return <Shape {...ALEXA_VOICE_SERVICE} {...props} />
}
