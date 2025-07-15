import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SAP_HANA_DB = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#DF8C42;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.sap_hana_db;',
  _width: 34,
  _height: 34,
}

export function SapHanaDb(props: DiagramNodeProps) {
  return <Shape {...SAP_HANA_DB} {...props} />
}
