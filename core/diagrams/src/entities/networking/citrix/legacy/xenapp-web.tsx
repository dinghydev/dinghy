import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const XENAPP_WEB = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.xenapp_web;',
  },
  _original_width: 76,
  _original_height: 90,
}

export function XenappWeb(props: NodeProps) {
  return (
    <Shape {...XENAPP_WEB} {...props} _style={extendStyle(XENAPP_WEB, props)} />
  )
}
