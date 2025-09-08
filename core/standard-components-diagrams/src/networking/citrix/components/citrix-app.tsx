import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CITRIX_APP = {
  _style: {
    entity:
      'sketch=0;verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;fillColor=#000000;align=center;outlineConnect=0;pointerEvents=1;shape=mxgraph.citrix2.citrix_app;',
  },
  _original_width: 50,
  _original_height: 50,
}

export function CitrixApp(props: DiagramNodeProps) {
  return (
    <Shape {...CITRIX_APP} {...props} _style={extendStyle(CITRIX_APP, props)} />
  )
}
