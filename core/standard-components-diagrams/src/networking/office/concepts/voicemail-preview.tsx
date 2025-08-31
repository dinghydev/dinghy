import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VOICEMAIL_PREVIEW = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.concepts.voicemail_preview;',
  _width: 57,
  _height: 52,
}

export function VoicemailPreview(props: DiagramNodeProps) {
  return (
    <Shape
      {...VOICEMAIL_PREVIEW}
      {...props}
      _style={extendStyle(VOICEMAIL_PREVIEW, props)}
    />
  )
}
