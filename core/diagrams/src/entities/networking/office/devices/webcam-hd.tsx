import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const WEBCAM_HD = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.devices.webcam_hd;',
  },
  _original_width: 56,
  _original_height: 59,
}

export function WebcamHd(props: NodeProps) {
  return (
    <Shape {...WEBCAM_HD} {...props} _style={extendStyle(WEBCAM_HD, props)} />
  )
}
