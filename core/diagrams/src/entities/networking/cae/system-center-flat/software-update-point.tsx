import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SOFTWARE_UPDATE_POINT = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#515151;shape=mxgraph.mscae.system_center.software_update_point',
  },
  _original_width: 50,
  _original_height: 43,
}

export function SoftwareUpdatePoint(props: NodeProps) {
  return (
    <Shape
      {...SOFTWARE_UPDATE_POINT}
      {...props}
      _style={extendStyle(SOFTWARE_UPDATE_POINT, props)}
    />
  )
}
