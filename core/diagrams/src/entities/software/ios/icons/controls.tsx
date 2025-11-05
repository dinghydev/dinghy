import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CONTROLS = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;align=center;labelBackgroundColor=#ffffff;verticalAlign=top;strokeWidth=2;strokeColor=#0080F0;shadow=0;dashed=0;shape=mxgraph.ios7.icons.controls;',
  },
  _width: 27,
  _height: 24,
}

export function Controls(props: NodeProps) {
  return (
    <Shape {...CONTROLS} {...props} _style={extendStyle(CONTROLS, props)} />
  )
}
