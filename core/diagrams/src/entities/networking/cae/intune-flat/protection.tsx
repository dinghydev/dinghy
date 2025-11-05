import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PROTECTION = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#505050;shape=mxgraph.mscae.intune.protection',
  },
  _original_width: 48,
  _original_height: 50,
}

export function Protection(props: NodeProps) {
  return (
    <Shape {...PROTECTION} {...props} _style={extendStyle(PROTECTION, props)} />
  )
}
