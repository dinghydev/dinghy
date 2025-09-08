import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const AUDIO_CONFERENCING_APPLICATION = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.communications.audio_conferencing_application;',
  },
  _original_width: 59,
  _original_height: 46,
}

export function AudioConferencingApplication(props: DiagramNodeProps) {
  return (
    <Shape
      {...AUDIO_CONFERENCING_APPLICATION}
      {...props}
      _style={extendStyle(AUDIO_CONFERENCING_APPLICATION, props)}
    />
  )
}
