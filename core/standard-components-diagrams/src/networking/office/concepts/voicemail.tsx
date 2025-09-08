import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const VOICEMAIL = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.concepts.voicemail;',
  },
  _original_width: 53,
  _original_height: 34,
}

export function Voicemail(props: DiagramNodeProps) {
  return (
    <Shape {...VOICEMAIL} {...props} _style={extendStyle(VOICEMAIL, props)} />
  )
}
