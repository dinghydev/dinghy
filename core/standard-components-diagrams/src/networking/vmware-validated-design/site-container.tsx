import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SITE_CONTAINER = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#434445;aspect=fixed;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.vvd.site_container;',
  },
  _width: 49.5,
  _height: 50,
}

export function SiteContainer(props: DiagramNodeProps) {
  return (
    <Shape
      {...SITE_CONTAINER}
      {...props}
      _style={extendStyle(SITE_CONTAINER, props)}
    />
  )
}
