import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TABS = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.tabTop;strokeColor=#DFDFDF;fillColor=#ffffff;rSize=5;perimeter=none;whiteSpace=wrap;resizeWidth=1;align=center;spacing=20;fontSize=14;fontColor=#4B5259;',
  },
  _original_width: 0,
  _original_height: 45,
}

export function Tabs(props: DiagramNodeProps) {
  return <Shape {...TABS} {...props} _style={extendStyle(TABS, props)} />
}
