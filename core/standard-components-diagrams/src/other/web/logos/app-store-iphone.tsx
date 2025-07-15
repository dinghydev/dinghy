import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const APP_STORE_IPHONE = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.app_store_iphone;fillColor=#75797C;strokeColor=none',
  _width: 61.2,
  _height: 20,
}

export function AppStoreIphone(props: DiagramNodeProps) {
  return <Shape {...APP_STORE_IPHONE} {...props} />
}
