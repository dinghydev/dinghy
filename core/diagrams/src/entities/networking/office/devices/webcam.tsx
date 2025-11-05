import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const WEBCAM = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.devices.webcam;',
  },
  _original_width: 40,
  _original_height: 50,
}

export function Webcam(props: NodeProps) {
  return <Shape {...WEBCAM} {...props} _style={extendStyle(WEBCAM, props)} />
}
