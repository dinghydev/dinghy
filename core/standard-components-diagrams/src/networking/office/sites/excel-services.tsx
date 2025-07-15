import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const EXCEL_SERVICES = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.sites.excel_services;',
  _width: 60,
  _height: 49,
}

export function ExcelServices(props: DiagramNodeProps) {
  return <Shape {...EXCEL_SERVICES} {...props} />
}
