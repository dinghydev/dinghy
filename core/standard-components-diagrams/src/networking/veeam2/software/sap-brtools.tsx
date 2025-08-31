import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SAP_BRTOOLS = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#DF8C42;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.sap_brtools;',
  _width: 34,
  _height: 34,
}

export function SapBrtools(props: DiagramNodeProps) {
  return (
    <Shape
      {...SAP_BRTOOLS}
      {...props}
      _style={extendStyle(SAP_BRTOOLS, props)}
    />
  )
}
