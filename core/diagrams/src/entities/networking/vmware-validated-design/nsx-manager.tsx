import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const NSX_MANAGER = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#434445;aspect=fixed;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.vvd.nsx_manager;',
  },
  _original_width: 50,
  _original_height: 50,
}

export function NsxManager(props: NodeProps) {
  return (
    <Shape
      {...NSX_MANAGER}
      {...props}
      _style={extendStyle(NSX_MANAGER, props)}
    />
  )
}
