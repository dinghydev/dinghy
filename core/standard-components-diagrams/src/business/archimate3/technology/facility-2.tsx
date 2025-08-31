import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FACILITY_2 = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#AFFFAF;shape=mxgraph.archimate3.facility;',
  },
  _width: 60,
  _height: 40,
}

export function Facility2(props: DiagramNodeProps) {
  return (
    <Shape {...FACILITY_2} {...props} _style={extendStyle(FACILITY_2, props)} />
  )
}
