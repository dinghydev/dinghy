import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const QUALITY_OF_SERVICE = {
  _style: {
    entity:
      'fillColor=#999999;verticalLabelPosition=bottom;sketch=0;html=1;strokeColor=#ffffff;verticalAlign=top;align=center;points=[[0.145,0.145,0],[0.5,0,0],[0.855,0.145,0],[1,0.5,0],[0.855,0.855,0],[0.5,1,0],[0.145,0.855,0],[0,0.5,0]];pointerEvents=1;shape=mxgraph.cisco_safe.compositeIcon;bgIcon=ellipse;resIcon=mxgraph.cisco_safe.capability.quality_of_service;',
  },
  _original_width: 43,
  _original_height: 43,
}

export function QualityOfService(props: DiagramNodeProps) {
  return (
    <Shape
      {...QUALITY_OF_SERVICE}
      {...props}
      _style={extendStyle(QUALITY_OF_SERVICE, props)}
    />
  )
}
