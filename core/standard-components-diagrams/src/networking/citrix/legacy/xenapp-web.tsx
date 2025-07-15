import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const XENAPP_WEB = {
  _style:
    'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.xenapp_web;',
  _width: 76,
  _height: 90,
}

export function XenappWeb(props: DiagramNodeProps) {
  return <Shape {...XENAPP_WEB} {...props} />
}
