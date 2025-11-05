import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ADD = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shadow=0;dashed=0;strokeWidth=1;shape=mxgraph.ios.iAddIcon;fillColor=#7AdF78;fillColor2=#1A9917;strokeColor=#ffffff;sketch=0;',
  },
  _original_width: 15,
  _original_height: 15,
}

export function Add(props: NodeProps) {
  return <Shape {...ADD} {...props} _style={extendStyle(ADD, props)} />
}
