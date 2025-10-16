import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const EXCEL_SERVICES = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.services.excel_services;',
  },
  _original_width: 60,
  _original_height: 49,
}

export function ExcelServices(props: DiagramNodeProps) {
  return (
    <Shape
      {...EXCEL_SERVICES}
      {...props}
      _style={extendStyle(EXCEL_SERVICES, props)}
    />
  )
}
