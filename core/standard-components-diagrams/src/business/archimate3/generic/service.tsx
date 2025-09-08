import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SERVICE = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#EBEBEB;shape=mxgraph.archimate3.application;appType=serv;archiType=rounded',
  },
  _original_width: 150,
  _original_height: 75,
}

export function Service(props: DiagramNodeProps) {
  return <Shape {...SERVICE} {...props} _style={extendStyle(SERVICE, props)} />
}
