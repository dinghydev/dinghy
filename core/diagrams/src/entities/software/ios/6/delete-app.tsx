import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DELETE_APP = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shadow=0;dashed=0;strokeWidth=1;shape=mxgraph.ios.iDeleteApp;fillColor=#cccccc;fillColor2=#000000;strokeColor=#ffffff;sketch=0;',
  },
  _original_width: 15,
  _original_height: 15,
}

export function DeleteApp(props: NodeProps) {
  return (
    <Shape {...DELETE_APP} {...props} _style={extendStyle(DELETE_APP, props)} />
  )
}
