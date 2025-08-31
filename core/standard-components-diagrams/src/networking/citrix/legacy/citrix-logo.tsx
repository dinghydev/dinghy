import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CITRIX_LOGO = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.citrix_logo;fillColor=#4E4F53;',
  },
  _width: 160,
  _height: 62.5,
}

export function CitrixLogo(props: DiagramNodeProps) {
  return (
    <Shape
      {...CITRIX_LOGO}
      {...props}
      _style={extendStyle(CITRIX_LOGO, props)}
    />
  )
}
