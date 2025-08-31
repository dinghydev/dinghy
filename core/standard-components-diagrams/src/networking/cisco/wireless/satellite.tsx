import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SATELLITE = {
  _style: {
    entity:
      'shape=mxgraph.cisco.wireless.satellite;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _width: 134,
  _height: 45,
}

export function Satellite(props: DiagramNodeProps) {
  return (
    <Shape {...SATELLITE} {...props} _style={extendStyle(SATELLITE, props)} />
  )
}
