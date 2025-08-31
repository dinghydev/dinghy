import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const XENAPP_WEB = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.xenapp_web;',
  },
  _width: 76,
  _height: 90,
}

export function XenappWeb(props: DiagramNodeProps) {
  return (
    <Shape {...XENAPP_WEB} {...props} _style={extendStyle(XENAPP_WEB, props)} />
  )
}
