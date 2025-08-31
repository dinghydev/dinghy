import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CITRIX_APP = {
  _style: {
    entity:
      'sketch=0;verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;fillColor=#000000;align=center;outlineConnect=0;pointerEvents=1;shape=mxgraph.citrix2.citrix_app;',
  },
  _width: 60,
  _height: 60,
}

export function CitrixApp(props: DiagramNodeProps) {
  return (
    <Shape {...CITRIX_APP} {...props} _style={extendStyle(CITRIX_APP, props)} />
  )
}
