import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VOICEMAIL = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.concepts.voicemail;',
  },
  _width: 53,
  _height: 34,
}

export function Voicemail(props: DiagramNodeProps) {
  return (
    <Shape {...VOICEMAIL} {...props} _style={extendStyle(VOICEMAIL, props)} />
  )
}
