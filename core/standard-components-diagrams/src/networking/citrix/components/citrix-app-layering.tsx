import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CITRIX_APP_LAYERING = {
  _style: {
    entity:
      'sketch=0;verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;fillColor=#000000;align=center;outlineConnect=0;pointerEvents=1;shape=mxgraph.citrix2.citrix_app_layering;',
  },
  _width: 50,
  _height: 45.835,
}

export function CitrixAppLayering(props: DiagramNodeProps) {
  return (
    <Shape
      {...CITRIX_APP_LAYERING}
      {...props}
      _style={extendStyle(CITRIX_APP_LAYERING, props)}
    />
  )
}
