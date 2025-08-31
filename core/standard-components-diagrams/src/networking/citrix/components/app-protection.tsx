import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const APP_PROTECTION = {
  _style:
    'sketch=0;verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;fillColor=#000000;align=center;outlineConnect=0;pointerEvents=1;shape=mxgraph.citrix2.app_protection;',
  _width: 47.61,
  _height: 50,
}

export function AppProtection(props: DiagramNodeProps) {
  return (
    <Shape
      {...APP_PROTECTION}
      {...props}
      _style={extendStyle(APP_PROTECTION, props)}
    />
  )
}
