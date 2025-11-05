import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const FINAL_STATE = {
  _style: {
    entity:
      'shape=mxgraph.sysml.actFinal;html=1;verticalLabelPosition=bottom;labelBackgroundColor=#ffffff;verticalAlign=top;',
  },
  _original_width: 40,
  _original_height: 40,
}

export function FinalState(props: NodeProps) {
  return (
    <Shape
      {...FINAL_STATE}
      {...props}
      _style={extendStyle(FINAL_STATE, props)}
    />
  )
}
