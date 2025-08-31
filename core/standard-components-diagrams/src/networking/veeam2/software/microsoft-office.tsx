import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MICROSOFT_OFFICE = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#DF8C42;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.microsoft_office;',
  },
  _width: 34,
  _height: 34,
}

export function MicrosoftOffice(props: DiagramNodeProps) {
  return (
    <Shape
      {...MICROSOFT_OFFICE}
      {...props}
      _style={extendStyle(MICROSOFT_OFFICE, props)}
    />
  )
}
