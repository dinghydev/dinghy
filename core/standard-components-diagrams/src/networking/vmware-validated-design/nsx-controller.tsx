import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const NSX_CONTROLLER = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#434445;aspect=fixed;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.vvd.nsx_controller;',
  _width: 50,
  _height: 50,
}

export function NsxController(props: DiagramNodeProps) {
  return <Shape {...NSX_CONTROLLER} {...props} />
}
