import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const MICROSOFT_SCOM = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#DF8C42;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.microsoft_scom;',
  },
  _original_width: 34,
  _original_height: 34,
}

export function MicrosoftScom(props: DiagramNodeProps) {
  return (
    <Shape
      {...MICROSOFT_SCOM}
      {...props}
      _style={extendStyle(MICROSOFT_SCOM, props)}
    />
  )
}
