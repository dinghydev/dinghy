import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CELL_PHONE_GENERIC = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.devices.cell_phone_generic;',
  _width: 26,
  _height: 47,
}

export function CellPhoneGeneric(props: DiagramNodeProps) {
  return <Shape {...CELL_PHONE_GENERIC} {...props} />
}
