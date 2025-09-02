import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FACILITY = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#AFFFAF;shape=mxgraph.archimate3.application;appType=facility;archiType=square;',
  },
  _original_width: 150,
  _original_height: 75,
}

export function Facility(props: DiagramNodeProps) {
  return (
    <Shape {...FACILITY} {...props} _style={extendStyle(FACILITY, props)} />
  )
}
