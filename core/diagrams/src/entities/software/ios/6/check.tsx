import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CHECK = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shadow=0;dashed=0;strokeWidth=1;shape=mxgraph.ios.iCheckIcon;fillColor=#e8878E;fillColor2=#BD1421;strokeColor=#ffffff;sketch=0;',
  },
  _original_width: 15,
  _original_height: 15,
}

export function Check(props: NodeProps) {
  return <Shape {...CHECK} {...props} _style={extendStyle(CHECK, props)} />
}
