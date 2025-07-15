import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const WEBCAM_HD = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.devices.webcam_hd;',
  _width: 56,
  _height: 59,
}

export function WebcamHd(props: DiagramNodeProps) {
  return <Shape {...WEBCAM_HD} {...props} />
}
