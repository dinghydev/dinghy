import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const VOICE_WORKLOAD = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.communications.voice_workload;',
  },
  _original_width: 58,
  _original_height: 51,
}

export function VoiceWorkload(props: DiagramNodeProps) {
  return (
    <Shape
      {...VOICE_WORKLOAD}
      {...props}
      _style={extendStyle(VOICE_WORKLOAD, props)}
    />
  )
}
