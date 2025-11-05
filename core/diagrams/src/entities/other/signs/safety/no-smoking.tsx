import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const NO_SMOKING = {
  _style: {
    entity:
      'shape=mxgraph.signs.safety.no_smoking;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 99,
  _original_height: 98,
}

export function NoSmoking(props: NodeProps) {
  return (
    <Shape {...NO_SMOKING} {...props} _style={extendStyle(NO_SMOKING, props)} />
  )
}
