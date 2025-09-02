import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PHISHING = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.concepts.phishing;',
  },
  _original_width: 59,
  _original_height: 47,
}

export function Phishing(props: DiagramNodeProps) {
  return (
    <Shape {...PHISHING} {...props} _style={extendStyle(PHISHING, props)} />
  )
}
