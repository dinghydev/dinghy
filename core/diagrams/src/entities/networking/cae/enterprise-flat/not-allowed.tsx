import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const NOT_ALLOWED = {
  _style: {
    entity:
      'sketch=0;aspect=fixed;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;shape=mxgraph.mscae.enterprise.not_allowed;fillColor=#EA1C24;',
  },
  _original_width: 50,
  _original_height: 50,
}

export function NotAllowed(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, NOT_ALLOWED)} />
}
