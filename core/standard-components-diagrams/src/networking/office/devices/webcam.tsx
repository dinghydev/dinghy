import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const WEBCAM = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.devices.webcam;',
  _width: 40,
  _height: 50,
}

export function Webcam(props: DiagramNodeProps) {
  return <Shape {...WEBCAM} {...props} _style={extendStyle(WEBCAM, props)} />
}
