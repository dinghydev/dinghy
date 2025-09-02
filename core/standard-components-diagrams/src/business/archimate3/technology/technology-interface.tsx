import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TECHNOLOGY_INTERFACE = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#AFFFAF;shape=mxgraph.archimate3.application;appType=interface;archiType=square;',
  },
  _original_width: 150,
  _original_height: 75,
}

export function TechnologyInterface(props: DiagramNodeProps) {
  return (
    <Shape
      {...TECHNOLOGY_INTERFACE}
      {...props}
      _style={extendStyle(TECHNOLOGY_INTERFACE, props)}
    />
  )
}
