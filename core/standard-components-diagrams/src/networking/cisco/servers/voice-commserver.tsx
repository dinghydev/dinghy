import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VOICE_COMMSERVER = {
  _style: {
    entity:
      'shape=mxgraph.cisco.servers.voice_commserver;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _width: 54,
  _height: 56,
}

export function VoiceCommserver(props: DiagramNodeProps) {
  return (
    <Shape
      {...VOICE_COMMSERVER}
      {...props}
      _style={extendStyle(VOICE_COMMSERVER, props)}
    />
  )
}
