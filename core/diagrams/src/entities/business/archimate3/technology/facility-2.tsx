import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const FACILITY_2 = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#AFFFAF;shape=mxgraph.archimate3.facility;',
  },
  _width: 60,
  _height: 40,
}

export function Facility2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, FACILITY_2)} />
}
