import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MICROSOFT_OFFICE = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#DF8C42;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.microsoft_office;',
  },
  _original_width: 34,
  _original_height: 34,
}

export function MicrosoftOffice(props: NodeProps) {
  return (
    <Shape
      {...MICROSOFT_OFFICE}
      {...props}
      _style={extendStyle(MICROSOFT_OFFICE, props)}
    />
  )
}
