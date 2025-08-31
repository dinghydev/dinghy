import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const AUDIO_CONFERENCING_APPLICATION = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.communications.audio_conferencing_application;',
  },
  _width: 59,
  _height: 46,
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
