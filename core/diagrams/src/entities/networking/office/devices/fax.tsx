import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const FAX = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.devices.fax;',
  },
  _original_width: 57,
  _original_height: 47,
}

export function Fax(props: NodeProps) {
  return <Shape {...FAX} {...props} _style={extendStyle(FAX, props)} />
}
