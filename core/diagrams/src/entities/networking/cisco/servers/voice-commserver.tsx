import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const VOICE_COMMSERVER = {
  _style: {
    entity:
      'shape=mxgraph.cisco.servers.voice_commserver;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 54,
  _original_height: 56,
}

export function VoiceCommserver(props: NodeProps) {
  return (
    <Shape
      {...VOICE_COMMSERVER}
      {...props}
      _style={extendStyle(VOICE_COMMSERVER, props)}
    />
  )
}
