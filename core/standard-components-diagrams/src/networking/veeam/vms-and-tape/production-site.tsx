import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PRODUCTION_SITE = {
  _style:
    'pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#EF8F21;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.production_site;',
  _width: 44.8,
  _height: 44.8,
}

export function ProductionSite(props: DiagramNodeProps) {
  return (
    <Shape
      {...PRODUCTION_SITE}
      {...props}
      _style={extendStyle(PRODUCTION_SITE, props)}
    />
  )
}
