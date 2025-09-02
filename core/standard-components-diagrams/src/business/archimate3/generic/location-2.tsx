import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LOCATION_2 = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;shape=mxgraph.archimate3.locationIcon;fillColor=#efd1e4;aspect=fixed;',
  },
  _original_width: 35,
  _original_height: 50,
}

export function Location2(props: DiagramNodeProps) {
  return (
    <Shape {...LOCATION_2} {...props} _style={extendStyle(LOCATION_2, props)} />
  )
}
