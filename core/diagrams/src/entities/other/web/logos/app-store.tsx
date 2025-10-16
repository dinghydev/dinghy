import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const APP_STORE = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.app_store;fillColor=#000000;strokeColor=none',
  },
  _width: 61.2,
  _height: 20,
}

export function AppStore(props: DiagramNodeProps) {
  return (
    <Shape {...APP_STORE} {...props} _style={extendStyle(APP_STORE, props)} />
  )
}
